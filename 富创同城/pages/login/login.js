// pages/login/login.js
const app = getApp();
var util = require("../../utils/util.js");
const md5 = require('../../utils/md5.js');
const sha1 = require('../../utils/sha1.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    t: "",
    aes: "",
    Tip: "",
    userName: "",
    password: "",
    user_id: "",
    token: "",
    value: "",
    mold: "password",
    see: "images/look.png"
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

  nameInput: function(e) {
    this.setData({
      userName: e.detail.value,
    })
  },

  passwordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  clear: function(e) {
    this.setData({
      value: ""
    })
  },

  change: function(e) {
    this.setData({
      see: "images/see.png",
      mold: "text"
    })
  },

  loginBtn: function(a) {
    let that = this;
    let myreg = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,3,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
    if (that.data.userName.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入11位手机号码',
      })
    } else if (!myreg.test(that.data.userName)) {
      wx.showModal({
        title: '提示',
        content: '请检查您的手机号格式是否有误',
      })
    } else if (that.data.password.length < 6 || that.data.password.length > 16) {
      wx.showModal({
        title: '提示',
        content: '请输入6-16位密码',
      })
    } else {
      // 获得加密
      wx.getStorage({
        key: 'WEP',
        success: res => {
          // 请求登录接口
          wx.request({
            url: app.globalData.API + '/v1/login/login',
            data: {
              t: res.data.t,
              sign: res.data.wep,
              user_name: that.data.userName,
              pass: that.data.password
            },
            success: res => {
              let status = res.data.status;
              if (status == 1) {
                wx.navigateTo({
                  url: '../house/house',
                })
                let id = res.data.data.user_id;
                let token = res.data.data.token;
                // 存储登录状态
                wx.setStorage({
                  key: "key",
                  data: {
                    user_id: id,
                    token: token
                  },
                  success: res => {
                    // 加密带token
                    let timestamp = Date.parse(new Date());
                    timestamp = timestamp / 1000;
                    let t = util.formatTimeTwo(timestamp);
                    let randomStr = "xiaolu.com";
                    wx.getStorage({
                      key: 'key',
                      success: res => {
                        let token = res.data.token;
                        let str = randomStr + t + token;
                        let sha = sha1.sha1(str);
                        let one = md5.hex_md5(sha);
                        let sign = one.toUpperCase();
                        wx.setStorage({
                          key: "AES",
                          data: {
                            t: timestamp,
                            sign: sign
                          },
                          success: res => {}
                        })
                      }
                    })
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
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取当前时间
    let timestamp = Date.parse(new Date());
    // 转换成时间戳
    timestamp = timestamp / 1000;
    let t = util.formatTimeTwo(timestamp);
    let randomStr = "xiaolu.com";
    let list = randomStr + t;
    let shami = sha1.sha1(list)
    let two = md5.hex_md5(shami)
    let wep = two.toUpperCase();
    // 加密不带token
    wx.setStorage({
      key: "WEP",
      data: {
        t: timestamp,
        wep: wep,
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