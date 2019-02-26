// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    t:"",
    wep:"",
    mobile: "",
    imgCode: "",
    code: "",
    password: "",
    pwdAgain: "",
    value: "",
    img: "",
    boolean: false,
    color: "",
    mailCode: "发送验证码",
    mold: "password",
    background: "#FF3131",
    seePwd: "../login/images/look.png",
    seePwdAgain: "../login/images/look.png",
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../deal/deal'
    })
  },

  // 手机号
  mobileInput: function(e) {
    this.setData({
      mobile: e.detail.value,
    })
  },
  // 图形验证码
  imgInput: function(e) {
    this.setData({
      imgCode: e.detail.value
    })
  },

  // 短信验证码
  codeInput: function(e) {
    this.setData({
      code: e.detail.value,
    })
  },

  // 密码
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 重复密码
  pwdAgainInput: function(e) {
    this.setData({
      pwdAgain: e.detail.value
    })
  },

  invite: function(e) {
    this.setData({
      invite: e.detail.value
    })
  },

  // 清空手机号
  clear: function(e) {
    this.setData({
      value: ""
    })
  },

  // 刷新图片验证码
  getImageSrc: function(e) {
    this.initCaptcha();
  },

  // 看密码
  changePwd: function(e) {
    this.setData({
      seePwd: "../login/images/see.png",
      mold: "text"
    })
  },

  // 看重复密码
  changePwdAgain: function(e) {
    this.setData({
      seePwdAgain: "../login/images/see.png",
      mold: "text"
    })
  },

  // 图形验证码
  initCaptcha() {
    let url = app.globalData.API + "/v1/public/verify?k=register&timenow=" + Math.random();
    wx.request({
      header: app.globalData.header,
      url,
      data: {},
      success: (res) => {
        this.setSessionId(res);
        this.downloadCaptcha();
      }
    })
  },
  downloadCaptcha() {
    let url = app.globalData.API + "/v1/public/verify?k=register&timenow=" + Math.random();
    wx.downloadFile({
      header: app.globalData.header,
      url,
      success: (res) => {
        this.setData({
          img: res.tempFilePath
        });
      }
    })
  },

  // 转换phpsessid
  setSessionId(res) {
    let cookieStr = res.header['Set-Cookie'];
    if (cookieStr) {
      let cookies = cookieStr.split('; ')
      if (!cookies || cookies.length <= 0)
        return;
      cookies.forEach(
        (v) => {
          const str = v.split('=');
          if (str[0] && str[0] == 'PHPSESSID') {
            let sessionId = decodeURI(str[1]);
            app.globalData.header.Cookie = `PHPSESSID=${sessionId}`;
          }
        }
      );
    }
  },

  // 发送验证码
  send: function(a) {
    let that = this;
    console.log(this.data.imgCode)
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (that.data.mobile.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (!myreg.test(that.data.mobile)) {
      wx.showModal({
        title: '提示',
        content: '请检查您的手机号格式是否有误',
      })
    } else if (that.data.imgCode=="") {
      wx.showModal({
        title: '提示',
        content: '请输入图形验证码',
      })
    } else {
      var pre = this.data;
      wx.request({
        header: app.globalData.header,
        url: app.globalData.API + '/v1/public/get_verif_code',
        data: {
          t:this.data.t,
          sign:this.data.wep,
          mobile: pre.mobile,
          code_type: "1",
          code: pre.imgCode,
        },
        success: res => {
          console.log(res)
          let oStatus = res.data.status;
          let phoneTip = res.data.info;
          console.log(res.data)
          if (oStatus == 1) {
            //倒计时
            let time = null;
            let that = this;
            let pre = this.data;
            let num = 30;
            time = setInterval(function() {
              if (num > 1) {
                num--;
                that.setData({
                  mailCode: "重新发送" + num + "s",
                  boolean: true,
                  background: "#e8e8e8"
                })
              } else {
                that.setData({
                  mailCode: "重新发送",
                  boolean: false,
                  background: "#FF3131"
                });
                clearInterval(time);
              }
            }, 1000)
            wx.showModal({
              title: '提示',
              content: phoneTip,
            })
          } else {
            wx.showModal({
              title: '提示',
              content: phoneTip,
            })
            this.downloadCaptcha()
          }
        }
      })
    }
  },

  doneBtn: function(e) {
    let that = this.data;
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (that.mobile.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (!myreg.test(that.mobile)) {
      wx.showModal({
        title: '提示',
        content: '请检查您的手机号格式是否有误',
      })
    } else if (that.imgCode.length < 4) {
      wx.showModal({
        title: '提示',
        content: '请输入图形验证码',
      })
    } else if (that.code.length < 6) {
      wx.showModal({
        title: '提示',
        content: '请输入短信验证码',
      })
    } else if (that.password.length < 6 || that.password.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请输入6-16位密码',
      })
    } else if (that.pwdAgain.length < 6 || that.pwdAgain.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请再次确认密码',
      })
    } else if (that.password !== that.pwdAgain) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
      })
    } else {
      wx.request({
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
        },
        url: app.globalData.API + '/v1/register/register',
        data: {
          t:this.data.t,
          sign:this.data.wep,
          user_name: that.mobile,
          code: that.code,
          nickname: that.mobile,
          pass: that.password,
          inviter: that.invite
        },
        success: res => {
          if (res.data.status == 1) {
            wx.showModal({
              title: '提示',
              content: res.data.info,
              success: function(res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../login/login'
                  })
                } else if (res.cancel) {
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.info
            })
          }
        },
        fail: res => {
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initCaptcha();
    wx.getStorage({
      key: 'WEP',
      success:res=>{
        this.setData({
          t:res.data.t,
          wep:res.data.wep,
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