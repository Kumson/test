// miniprogram/pages/frontpage/frontpage.js
Page({
  onLoad: function (options) {
    // 获取初始订单信息
    this.refreshData()
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {
    //下拉刷新订单
    this.refreshData()
    wx.stopPullDownRefresh()
  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

  data: {

  },

  //刷新数据，访问数据库，寻找与本机_openid相同的订单，存储在queryResult数组内
  refreshData: function () {
    const db = wx.cloud.database()
    db.collection('recievingloc').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          queryResult: res.data
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
})