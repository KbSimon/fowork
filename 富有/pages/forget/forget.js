// pages/forget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    imgCode: "",
    code: "",
    password: "",
    pwdAgain: "",
    mailCode: "发送验证码",
    boolean: false,
    isChecked: false,
  },

  // 手机号
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

  // 图文验证码
  imgCodeInput: function(e) {
    let imgCode = e.detail.value;
    if (imgCode.length < 4) {
      wx.showModal({
        title: '提示',
        content: '请输入图文验证码',
      })
    } else {
      this.setData({
        imgCode: e.detail.value
      })
    }
  },

  codeInput: function(e) {
    let code = e.detail.value
    if (code.length < 6) {
      wx.showModal({
        title: '提示',
        content: '请输入验证码',
      })
    } else {
      this.setData({
        code: e.detail.value
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

  // 图片验证码
  getImageSrc: function(res) {
    wx.request({
      url: 'https://www.fuminjf.com/v1/public/verify',
      success: res => {
        let oStatus = res.data.status;
        if (oStatus = 1) {

        } else(
          this.setData({
            imgCode: e.detail.value
          })
        )
      }
    }, );
  },

  send: function(e) {
    var pre = this.data;
    console.log(pre)
    wx.request({
      url: 'https://www.fuminjf.com/v1/public/get_verif_code',
      data: {
        mobile: pre.userName,
        code_type: "1",
        code: pre.imgCode
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
          this.setData({
            code: e.detail.value
          })
        }
      }
    })
  },

  // 保存
  saveBtn: function(e) {
    let that = this;
    if (that.data.userName.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (that.data.imgCode.length < 4) {
      wx.showModal({
        title: '提示',
        content: '请输入图文验证码',
      })
    } else if (that.data.code.length < 6) {
      wx.showModal({
        title: '提示',
        content: '请输入图文验证码',
      })
    } else if (that.data.password.length < 6 || that.data.password.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请输入新密码',
      })
    } else if (that.data.pwdAgain.length < 6 || that.data.pwdAgain.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请再次确认密码',
      })
    } else if (that.data.pwdAgain !== that.data.password) {
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