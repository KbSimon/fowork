// pages/house/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    user_id: "",
    token: "",
    t: "",
    sign: "",
    src: "",
    area: "",
    title: "",
    shi: "",
    qu: "",
    name: "",
    phone: "",
    month: "",
    danwei: "",
    date: "随时看房>"
  },

  name: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  phone: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  submit: function(e) {
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (this.data.name == "") {
      wx.showModal({
        title: '提示',
        content: '请输入您的姓名',
      })
    } else if (this.data.phone == "") {
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
      })
    } else if (!myreg.test(this.data.phone)) {
      wx.showModal({
        title: '提示',
        content: '请检查您的手机号格式是否有误',
      })
    } else if (this.data.date == "随时看房>") {
      wx.showModal({
        title: '提示',
        content: '请输入看房时间',
      })
    } else {
      wx.request({
        method: "POST",
        url: app.globalData.API + '/v1/house/add_reservation',
        header: {
          "content-type": "application/x-www-form-urlencoded",
        },
        data: {
          user_id: this.data.user_id,
          token: this.data.token,
          t: this.data.t,
          sign: this.data.sign,
          type: "1",
          phone: this.data.phone,
          linkman: this.data.name,
          house_type: "offices",
          house_id: this.data.id,
          reservation_time: this.data.date
        },
        success: res => {
          if (res.data.status == 1) {
            wx.showModal({
              title: '提示',
              content: res.data.info,
              success: res => {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../house/house',
                  })
                } else if (res.cancel) {}
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.info,
              success: res => {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../house/house',
                  })
                } else if (res.cancel) {}
              }
            })
          }
        }
      })
    }
  },

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_info?id=' + id,
      success: res => {
        if (res.data.status == 1) {
          let data = res.data.data;
          this.setData({
            id: data.id,
            area: data.area,
            src: data.show_img,
            title: data.title,
            shi: data.shi.name,
            qu: data.qu.name,
            danwei: data.danwei.title,
            month: data.month_amount,
          })
        }
      }
    })
    // 获取Stroge
    wx.getStorage({
      key: 'key',
      success: res => {
        this.setData({
          user_id: res.data.user_id,
          token: res.data.token,
        })
      }
    })
    // 获取token加密
    wx.getStorage({
      key: 'AES',
      success: res => {
        this.setData({
          t: res.data.t,
          sign: res.data.sign
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})