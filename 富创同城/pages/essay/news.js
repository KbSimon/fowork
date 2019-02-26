// pages/firm/news.js
const app = getApp();
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    data: "",
  },

  // 跳转到开发商
  firm: function() {
    wx.navigateTo({
      url: '../firm/firm',
    })
  },

  //跳转到房源
  house: function() {
    wx.navigateTo({
      url: '../house/house',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: app.globalData.API + "/v1/article/get_notice_list",
      success: res => {
        if (res.data.status = 1) {
          let data = res.data.data;
          for (var i = 0; i < data.length; i++) {
            data[i]["add_time"] = util.formatTimeTwo(data[i]["add_time"]);
            this.setData({
              data: data,
            })
          }
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