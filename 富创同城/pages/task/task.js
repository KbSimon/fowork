// pages/task/task.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: "",
    token: "",
    list: "",
    integral: "",
    color1: "#fff",
    color2: "#C4000F",
    img: "images/get.png",
    img2: "images/get.png",
    img3: "images/get.png",
    img4: "images/get.png",
    img5: "images/get.png",
    img6: "images/get.png",
    img7: "images/get.png",
  },


  // 签到
  check: function(e) {
    console.log(this.data)
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          // 判断当日是否签到
          if (data.is_sign_in == 1) {
            // 获取连续签到天数
            if (data.continue == 0) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
                  if (status == 1) {
                    let that = this;
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
                content: '请按顺序签到',
              })
            }
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

  // 第二天签到
  check2: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 1) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
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
                        img2: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 第三天签到
  check3: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 2) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
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
                        img3: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 第四天签到
  check4: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 3) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
                  if (status == 1) {
                    let that = this;
                    wx.showModal({
                        title: '提示',
                        content: res.data.info
                      }),
                      that.setData({
                        color1: "#5A5A5A",
                        color2: "#fff",
                        img4: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 第五天签到
  check5: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 4) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
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
                        img5: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 第六天签到
  check6: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 5) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
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
                        img6: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 第七天签到
  check7: function(e) {
    wx.request({
      url: app.globalData.API + '/v1/sign/check_sign_in',
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        let status = res.data.status;
        let data = res.data.data;
        if (status == 1) {
          if (data.is_sign_in == 1) {
            if (data.continue == 6) {
              wx.request({
                url: app.globalData.API + '/v1/sign/sign_in',
                data: {
                  user_id: this.data.user_id,
                  token: this.data.token
                },
                success: res => {
                  if (status == 1) {
                    let that = this;
                    wx.showModal({
                        title: '提示',
                        content: res.data.info
                      }),
                      that.setData({
                        color1: "#5A5A5A",
                        color2: "#fff",
                        img7: "images/yet.png"
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
                content: '请按顺序签到',
              })
            }
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

  // 邀请
  invite: function (e) {
    wx.request({
      url: app.globalData.API + "/v1/sign/is_share",
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        if (res.data.status == 1) {
          if (res.data.data.is_share == 1) {
            wx.navigateTo({
              url: "../task/invite",
            })
            wx.request({
              method: "POST",
              url: app.globalData.API + "/v1/task/add_credit",
              header: {
                "content-type": "application/x-www-form-urlencoded",
              },
              data: {
                user_id: this.data.user_id,
                token: this.data.token,
                type: "credit_share"
              },
              success: res => {
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.info,
            })
          }
        } else {
          console.log(1)
          wx.showModal({
            title: '提示',
            content: res.data.info,
          })
        }
      }
    })
  },
  // 分享
  share: function (e) {
    wx.request({
      method: "POST",
      url: app.globalData.API + "/v1/task/add_credit",
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
      data: {
        user_id: this.data.user_id,
        token: this.data.token,
        type: "share"
      },
      success: res => { }
    })
  },

  look:function(e){
    wx.navigateTo({
      url: '../firm/firm',
    })
  },

  // 晒收入
  bask: function (e) {
    wx.request({
      url: app.globalData.API + "/v1/sign/is_share",
      data: {
        user_id: this.data.user_id,
        token: this.data.token
      },
      success: res => {
        if (res.data.status == 1) {
          if (res.data.data.is_share == 1) {
            wx.navigateTo({
              url: "../task/invite",
            })
            wx.request({
              method: "POST",
              url: app.globalData.API + "/v1/task/add_credit",
              header: {
                "content-type": "application/x-www-form-urlencoded",
              },
              data: {
                user_id: this.data.user_id,
                token: this.data.token,
                type: "income_share"
              },
              success: res => {
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.info,
            })
          }
        } else {
          console.log(1)
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
    wx.getStorage({
      key: 'key',
      success: res => {
        let that = this;
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
        //  is_sign_in 当天是否签到 0 已经签到 1 未签到
        //  continue 连续签到天数
        wx.request({
          url: app.globalData.API + '/v1/sign/check_sign_in',
          data: {
            user_id: res.data.user_id,
            token: res.data.token
          },
          success: res => {
            let status = res.data.status;
            let data = res.data.data;
            let that = this;
            if (status == 1) {
              // 判断当天是否签到
              if (data.is_sign_in == 0) {
                let sign = data.continue;
                // 判断连续签到天数
                switch (sign) {
                  case "1":
                    that.setData({
                      img: "images/yet.png"
                    })
                    break;
                  case "2":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png"
                    })
                    break;
                  case "3":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png"
                    })
                    break;
                  case "4":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png"
                    })
                    break;
                  case "5":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png"
                    })
                    break;
                  case "6":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png",
                      img6: "images/yet.png"
                    })
                    break;
                  case "7":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png",
                      img6: "images/yet.png",
                      img7: "images/yet.png"
                    })
                    break;
                  default:
                    that.setData({
                      img: "images/get.png"
                    })
                }
              } else {
                let sign = data.continue;
                switch (sign) {
                  case "1":
                    that.setData({
                      img: "images/yet.png"
                    })
                    break;
                  case "2":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png"
                    })
                    break;
                  case "3":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png"
                    })
                    break;
                  case "4":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png"
                    })
                    break;
                  case "5":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png"
                    })
                    break;
                  case "6":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png",
                      img6: "images/yet.png"
                    })
                    break;
                  case "7":
                    that.setData({
                      img: "images/yet.png",
                      img2: "images/yet.png",
                      img3: "images/yet.png",
                      img4: "images/yet.png",
                      img5: "images/yet.png",
                      img6: "images/yet.png",
                      img7: "images/yet.png"
                    })
                    break;
                  default:
                    that.setData({
                      img: "images/get.png"
                    })
                }
              }
            }
          }
        })
        // 获取任务列表
        wx.request({
          url: app.globalData.API + "/v1/task/task_list",
          data: {
            user_id: res.data.user_id,
            token: res.data.token
          },
          success: res => {
            let list = res.data
            if (list.status == 1) {
              this.setData({
                list: list.data
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