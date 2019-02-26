// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: "",
    img: app.globalData.API + "/v1/public/verify"
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../password/password'
    })
  },

  // 手机号
  nameInput: function(e) {
    console.log(e)
    let userName = e.detail.value;
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (userName.length < 11) {
      // wx.showModal({
      //   title: '提示',
      //   content: '请输入11位手机号码',
      // })
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

  // 图形验证码
  passwordInput: function(e) {
    let password = e.detail.value;
    if (password.length < 4) {
      // wx.showModal({
      //   title: '提示',
      //   content: '请输入验证码',
      // })
    } else {
      this.setData({
        password: e.detail.value
      })
    }
  },

  // 刷新图片验证码
  getImageSrc: function(e) {
    let pic = e.target.dataset.imgsrc;
    console.log(pic)
    this.setData({
      img: pic + '?k=register&timenow=' + Math.random(),
    })
  },

  // 发送验证码
  loginBtn: function(a) {
    let that = this;
    console.log(that);
    if (that.data.userName.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (that.data.password.length < 4) {
      wx.showModal({
        title: '提示',
        content: '请输入验证码',
      })
    } else {
      var pre = this.data;
      console.log(pre)
      wx.request({
        url: app.globalData.API + '/v1/public/get_verif_code',
        data: {
          mobile: pre.userName,
          code_type: "1",
          code: pre.password,
        },
        success: res => {
          //成功的话直接跳转到首页
          let oStatus = res.data.status;
          let phoneTip = res.data.info;
          if (oStatus == 1) {
            wx.navigateTo({
              url: '../password/password?phone=' + that.data.userName + '&imgCode=' + that.data.password,
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.info,
            })
          }
        }
      })

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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