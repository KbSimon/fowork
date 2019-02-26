// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color1: "#333",
    color2: "#333",
    area: "全杭州",
    zone: "none",
    mask: "none",
    limit: "block",
    idx:0,
    district: [{
        'num': '全杭州'
      },
      {
        'num': '上城区'
      },
      {
        'num': '下城区'
      },
      {
        'num': '江干区'
      },
      {
        'num': '拱墅区'
      },
      {
        'num': '西湖区'
      },
      {
        'num': '滨江区'
      },
      {
        'num': '萧山区'
      },
      {
        'num': '余杭区'
      },
    ],
    row:{
      address:["不限"],
      address:["上城区","1"]
    }
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../task/task'
    })
  },

  limit: function(e) {
    this.setData({
      zone: "none",
      mask: "none",
      list: "#05c000",
      area: e.target.dataset.text,
    })
  },

  // 区域
  area: function() {
    this.setData({
      zone: "block",
      mask: "block",
    })
  },

  zone:function(e){
    let index = e.currentTarget.dataset.index;
    console.log('每个index',index)
    this.setData({
      idx: index
    })
  },

  all: function(e) {
    let index = e.currentTarget.dataset.index;
    console.log('每个index', index)
    let color = this.data.color == "#333" ? "#333" : "#05c000";
    this.setData({
      color2: color,
    })
  },



  // 上城区
  scq: function(e) {
    this.setData({
      all: "#333",
      xcq: "#333",
      jgq: "#333",
      gsq: "#333",
      xhq: "#333",
      bjq: "#333",
      xsq: "#333",
      yhq: "#333",
      scq: "#05c000",
      sc: "block",
      xc: "none",
      jg: "none",
      limit: "none",
    })
  },

  // 下城区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xcq: "#05c000",
      xc: "block",
      sc: "none",
      limit: "none",
    })
  },

  // 江干区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xcq: "#333",
      jgq: "#05c000",
      jg: "block",
      xc: "none",
      sc: "none",
      limit: "none",

    })
  },

  // 拱墅区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xc: "block",
      sc: "none",
      limit: "none",
      xcq: "#05c000",
    })
  },

  // 西湖区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xc: "block",
      sc: "none",
      limit: "none",
      xcq: "#05c000",
    })
  },

  // 滨江区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xc: "block",
      sc: "none",
      limit: "none",
      xcq: "#05c000",
    })
  },

  // 萧山区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xc: "block",
      sc: "none",
      limit: "none",
      xcq: "#05c000",
    })
  },

  // 余杭区
  xcq: function(e) {
    this.setData({
      all: "#333",
      scq: "#333",
      xc: "block",
      sc: "none",
      limit: "none",
      xcq: "#05c000",
    })
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