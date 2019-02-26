// pages/task/details.js
const app = getApp()
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: [],
    time: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getStorage({
      key: 'key',
      success: res => {
        wx.request({
          url: app.globalData.API + '/v1/sign/credit_list',
          data: {
            user_id: res.data.user_id,
            token: res.data.token,
            size: 1000,
          },
          success: res => {
            let list = res.data.data;
            for (var i = 0; i < list.length; i++) {
              list[i]["time"] = util.formatTimeTwo(list[i]["time"]);
              this.setData({
                total: list,
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