// pages/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    password: "",
    pwdAgain: ""
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },

  codeInput: function(e) {
    let code = e.detail.value;
    if (code.length < 6) {
      wx.showModal({
        title: '提示',
        content: '请输入验证码',
      })
    } else {
      this.setData({
        code: e.detail.value,
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

  pwdAgainInput: function(e) {
    let pwdAgain = e.detail.value;
    console.log(pwdAgain)
    if (pwdAgain.length < 6 || pwdAgain.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请再次确认密码',
      })
    } else {
      this.setData({
        pwdAgain: e.detail.value
      })
    }
  },

  doneBtn: function(a) {
    let that = this;
    if (that.data.code.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入验证码',
      })
    } else if (that.data.password.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入6-16位密码',
      })
    } else if (that.data.pwdAgain.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请再次输入密码',
      })
    } else if (that.data.password !== that.data.pwdAgain) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
      })
    } else {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 3000,
        success: res => {
          wx.navigateTo({
            url: '../login/login',
          })
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