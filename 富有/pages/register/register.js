// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    password: ""
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../password/password'
    })
  },

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


  passwordInput: function(e) {
    let password = e.detail.value;
    if (password.length < 6 || password.length > 16) {
      // wx.showModal({
      //   title: '提示',
      //   content: '请输入6-16位密码',
      // })
    } else {
      this.setData({
        password: e.detail.value
      })
    }
  },

  loginBtn: function(a) {
    let that = this;
    console.log(that);
    console.log();
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
    }else{
      wx.navigateTo({
        url: '../password/password',
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