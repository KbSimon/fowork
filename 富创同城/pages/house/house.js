// pages/house/house.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaId:"",
    adcode: "",
    color1: "#333",
    color2: "#333",
    area: "全杭州",
    acreage: "面积",
    sort: "默认排序",
    choose: "筛选",
    zone: "none",
    mask: "none",
    screen: "none",
    haLump: "none",
    rank: "none",
    idx1: 0,
    idx2: 0,
    idx3: 0,
    idx4: 0,
    district: "",
    house: "",
    badge1: "▼",
    badge2: "▼",
    badge3: "▼",
    badge4: "▼",
    rent_type: "",
    lump2:"",
    lump3:"",
    lump4: [{
        'num': '长租'
      },
      {
        'num': '短租'
      }
    ]
  },

  // 跳转到发现
  find: function() {
    wx.navigateTo({
      url: '../firm/firm',
    })
  },

  // 区域
  area: function() {
    this.setData({
      rank: "none",
      zone: "block",
      mask: "block",
      haLump: "none",
      screen: "none",
    })
  },

  acreage: function() {
    this.setData({
      rank: "none",
      zone: "none",
      mask: "block",
      haLump: "block",
      screen: "none",
    })
  },

  sort: function() {
    this.setData({
      rank: "block",
      zone: "none",
      mask: "block",
      haLump: "none",
      screen: "none",
    })
  },

  choose: function() {
    this.setData({
      rank: "none",
      zone: "none",
      mask: "block",
      haLump: "none",
      screen: "block",
    })
  },

  //  区域列表
  zone: function(e) {
    let text = e.target.dataset.text;
    let index = e.currentTarget.dataset.index;
    let adcode = e.currentTarget.dataset.adcode;
    this.setData({
      adcode: adcode,
      idx: index,
      area: text,
      zone: "none",
      mask: "none",
      badge1: "▲",
      color1: "#05c000",
    })
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_list?shi=0571&size=1000&qu=' + adcode + "&area=" + this.data.areaId + "&order=" + this.data.order + "&rent_type=" + this.data.rent_type,
      success: res => {
        if (res.data.status == 1) {
          let house = res.data.data;
          if (house != "") {
            this.setData({
              house: house
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '抱歉！没有找到符合条件房源。',
            })
          }
        }
      }
    })
  },

  // 面积
  haLump: function(e) {
    let text = e.target.dataset.text;
    let areaId = e.currentTarget.dataset.id;
    console.log(areaId)
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx: index,
      areaId: areaId,
      acreage: text,
      haLump: "none",
      mask: "none",
      badge2: "▲",
      color2: "#05c000",
    })
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_list?shi=0571&size=1000&qu=' + this.data.adcode + "&area=" + this.data.areaId + "&order=" + this.data.order + "&rent_type=" + this.data.rent_type,
      success: res => {
        if (res.data.status == 1) {
          let house = res.data.data;
          if (house != "") {
            this.setData({
              house: house
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '抱歉！没有找到符合条件房源。',
            })
          }
        }
      }
    })
  },

  // 默认排序
  rank: function(e) {
    let text = e.target.dataset.text;
    let order = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx: index,
      sort: text,
      rank: "none",
      mask: "none",
      badge3: "▲",
      order:order,
      color3: "#05c000",
    })
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_list?shi=0571&size=1000&qu=' + this.data.adcode + "&area=" + this.data.areaId + "&order=" + this.data.order + "&rent_type=" + this.data.rent_type,
      success: res => {
        if (res.data.status == 1) {
          let house = res.data.data;
          if (house != "") {
            this.setData({
              house: house
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '抱歉！没有找到符合条件房源。',
            })
          }
        }
      }
    })
  },

  // 筛选
  screen: function(e) {
    let text = e.target.dataset.text;
    let rent_type = text == "长租" ? 0 : 1;
    let index = e.currentTarget.dataset.index;
    this.setData({
      idx: index,
      choose: text,
      screen: "none",
      mask: "none",
      badge4: "▲",
      color4: "#05c000",
      rent_type: rent_type,
    })
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_list?shi=0571&size=1000&qu=' + this.data.adcode + "&area=" + this.data.areaId + "&order=" + this.data.order + "&rent_type=" + this.data.rent_type,
      success: res => {
        if (res.data.status == 1) {
          let house = res.data.data;
          console.log(house)
          if (house != "") {
            this.setData({
              house: house
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '抱歉！没有找到符合条件房源。',
            })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取区域
    wx.request({
      url: app.globalData.API + '/v1/house/get_district?citycode=0571',
      success: res => {
        if (res.data.status == 1) {
          let list = res.data.list;
          this.setData({
            district: list,
          })
        }
      }
    })
    // 获取面积
    wx.request({
      url: app.globalData.API + '/v1/house/dict?pid=51',
      success: res => {
        if (res.data.status == 1) {
          let lump2 = res.data.list;
          this.setData({
            lump2: lump2,
          })
        }
      }
    })
    // 获取排序
    wx.request({
      url: app.globalData.API + '/v1/house/dict?pid=49',
      success: res => {
        if (res.data.status == 1) {
          let lump3 = res.data.list;
          this.setData({
            lump3: lump3,
          })
        }
      }
    })
    // 获取地产
    wx.request({
      url: app.globalData.API + '/v1/house/get_offices_list?shi=0571&size=1000',
      success: res => {
        if (res.data.status == 1) {
          let house = res.data.data;
          this.setData({
            house: house
          })
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