// pages/house/details.js
const app = getApp();
var util = require("../../utils/util.js");
var WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    src: "",
    area: "",
    title: "",
    shi: "",
    qu: "",
    addr: "",
    desc: "",
    dianti: "",
    danwei: "",
    month: "",
    phone: "",
    add_time: "",
    zhuangxiu: "",
    louceng: "",
    zonglouceng: "",
    lianxiren: "",
  },

  phone: function() {
    wx.showModal({
      confirmText:"呼叫",
      title: this.data.lianxiren,
      content: this.data.phone,
      success: res => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: this.data.phone,
          })
        } else if (res.cancel) {}
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_info?id=' + id,
      success: res => {
        if (res.data.status == 1) {
          let data = res.data.data;
          this.setData({
            id: data.id,
            area: data.area,
            desc: data.desc,
            shi: data.shi.name,
            qu: data.qu.name,
            addr: data.addr,
            phone: data.phone,
            dianti: data.dianti,
            add_time: util.formatTimeTwo(data.add_time),
            src: data.show_img,
            title: data.title,
            louceng: data.louceng,
            zonglouceng: data.zonglouceng,
            danwei: data.danwei.title,
            month: data.month_amount,
            lianxiren: data.lianxiren,
            zhuangxiu: data.zhuangxiu.title,
          })

          var article = this.data.desc;
          var that = this;
          WxParse.wxParse('article', 'html', article, that, 5);
        }
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