// pages/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Tip: "",
    userName: "",
    password: "",
    user_id:"",
    token:""
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../register/register'
    })
    wx.navigateTo({
      url: '../forget/forget'
    })
    wx.navigateTo({
      url: '../task/task'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  nameInput: function(e) {
    let userName = e.detail.value;
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (userName.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (!myreg.test(userName)) {
      wx.showModal({
        title: '提示',
        content: '请检查您的手机号格式是否有误',
      })
    } else {
      this.setData({
        userName: e.detail.value,
      })
    }
  },


  passwordInput: function(e) {
    let password = e.detail.value;
    if (password.length < 6 || password.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请输入6-16位密码',
      })
    } else {
      this.setData({
        password: e.detail.value
      })
    }
  },

  loginBtn: function(a) {
    let that = this;
    if (that.data.userName.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (that.data.password.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入6-16位密码',
      })
    }
    wx.request({
      url: app.globalData.API + '/v1/login/login',
      data: {
        user_name: that.data.userName,
        pass: that.data.password
      },
      success: res => {
        let status = res.data.status;
        if (status == 1) {
          wx.navigateTo({
            url: '../task/task',
          })
          let id = res.data.data.user_id;
          let token = res.data.data.token;
          wx.setStorage({
            key: "key",
            data: {
               user_id:id,
               token:token
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.info,
          })
        }
      }
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