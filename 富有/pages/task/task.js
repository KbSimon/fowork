// pages/task/task.js
const app = getApp()
const util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: "",
    token: "",
    integral: "",
    message: null,
    color1: "#fff",
    color2: "#C4000F",
    img: "images/get.png",
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../rules/rules'
    })
  },

  // 签到
  check: function(e) {
    console.log(this.data)
    // 判断是否签到
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        console.log(res.data.data)
        if (status == 1) {
          // 请求签到
          if (data.is_sign_in == 1) {
            wx.request({
              url: app.globalData.API + '/v1/sign/sign_in',
              data: {
                user_id: this.data.user_id,
                token: this.data.token
              },
              success: res => {
                // 签到成功
                if (status == 1) {
                  let that = this;
                  let pic = e.target.dataset.imgsrc;
                  wx.showModal({
                      title: '提示',
                      content: res.data.info
                    }),
                    that.setData({
                      color1: "#5A5A5A",
                      color2: "#fff",
                      img: "images/yet.png"
                    })
                } else {
                  wx.showModal({
                    title: '提示',
                    content: res.data.info
                  })
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '您今天已签到，请明天再来',
            })
          }
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data)
    wx.getStorage({
      key: 'key',
      success: res => {
        let that = this;
        console.log(res.data.user_id)
        that.setData({
          user_id: res.data.user_id,
          token: res.data.token,

        })
        //  获取积分
        wx.request({
          url: app.globalData.API + '/v1/sign/query_credit',
          data: {
            user_id: res.data.user_id,
            token: res.data.token
          },
          success: res => {
            let status = res.data.status;
            if (status == 1) {
              let that = this;
              console.log(res.data.data.credit)
              that.setData({
                integral: res.data.data.credit
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