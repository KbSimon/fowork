// pages/jump/one.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    src: "",
    token: "",
    user_id: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let num = options.id;
    this.setData({
      src: "https://www.fuminjf.com/v1/serve/company_info?id=" + num,
    })

    // 查询企业详情
    wx.request({
      url: app.globalData.API + "/v1/serve/company_list",
      success: res => {
        if (res.data.status == 1) {
          let data = res.data.data;
          for (var i = 0; i < data.length; i++) {
            let id = data[i].id;
            this.setData({
              id: id,
            })
          }
          // 加积分
          wx.request({
            method: "POST",
            url: app.globalData.API + '/v1/task/watch_adv',
            header: {
              "content-type": "application/x-www-form-urlencoded",
            },
            data: {
              user_id: this.data.user_id,
              token: this.data.token,
              company_id: this.data.id,
              type: "company"
            },
            success: res => {}
          })
        }
      }
    })
    wx.getStorage({
      key: 'key',
      success: res => {
        let that = this;
        let token = res.data.token;
        let user_id = res.data.user_id;
        that.setData({
          user_id: user_id,
          token: token,
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