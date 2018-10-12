//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: true,  //显示面板指示点
    autoplay: true,     //自动切换
    interval: 5000,    //自动切换时间间隔
    duration: 1000,    //滑动动画时长
   
  },
  //事件处理函数
  check:function(){
   wx.navigateTo({
     url: '../check/check',
   })
  },
  invite: function () {
    wx.navigateTo({
      url: '../invite/invite',
    })
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
    wx.navigateTo({
      url: '../space/space'
    })
    wx.navigateTo({
      url: '../serve/serve'
    })
    //跳转到签到
    wx.navigateTo({
      url: '../check/check'
    })
    // 跳转到爆款商品
    wx.navigateTo({
      url: '../hot/hot'
    })
    // 跳转到商品详情
    wx.navigateTo({
      url: '../details/details'
    })
    // 跳转到文章资讯
    wx.navigateTo({
      url: '../message/message'
    })
    // 跳转到企业商城
    wx.navigateTo({
      url: '../stote/store'
    })
    // 跳转到我的账户
    wx.navigateTo({
      url: '../mine/mine'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
