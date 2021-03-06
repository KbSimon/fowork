// pages/password/password.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    imgCode: "",
    password: "",
    pwdAgain: "",
    mailCode: "发送验证码",
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },

  // 发送验证码
  send: function(e) {
    var pre = this.data;
    console.log(pre)
    wx.request({
      url: app.globalData.API + '/v1/public/get_verif_code',
      data: {
        mobile: pre.phone,
        code_type: "1",
        code: pre.imgCode,
      },
      success: res => {
        //成功的话直接跳转到首页
        let oStatus = res.data.status;
        let phoneTip = res.data.info;
        if (oStatus == 1) {
          //倒计时
          let time = null;
          let that = this;
          let pre = this.data;
          let num = 60;
          time = setInterval(function() {
            if (num > 1) {
              num--;
              that.setData({
                mailCode: num + 's',
                isChecked: true,
                boolean: true
              })
            } else {
              that.setData({
                mailCode: '重新发送',
                isChecked: false,
                boolean: false
              });
              clearInterval(time);
            }
          }, 1000)
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.info,
          })
        }
      }
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

  // 密码
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
  // 重复密码
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

  // 完成注册
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
      wx.request({
        url: 'https://www.fuminjf.com/v1/user/forgot',
        data: {
          mobile: that.data.userName,
          pass: that.data.password,
          confirm_pass: that.data.pwdAgain,
          code: that.data.imgCode
        },
        success: res => {
          //成功的话直接跳转到首页
          let oStatus = res.data.status;
          let phoneTip = res.data.info;
          if (oStatus == 1) {
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
          } else {
            wx.showModal({
              title: '提示',
              content: phoneTip,
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
    console.log(options)
    this.setData({
      phone: options.phone,
      imgCode: options.imgCode,
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