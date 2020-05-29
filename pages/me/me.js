// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 收藏列表
   */
  listEvent() {
    wx.navigateTo({
      url: '../collect/collect',
    })
  },

  history() {
    wx.navigateTo({
      url: '../history/history',
    })
  },

  advance() {
    wx.navigateTo({
      url: '../advance/advance',
    })
  },
  invite() {
    wx.showActionSheet({
      itemList: ['好友', '群聊', '朋友圈'],
      success(res) {
        console.log(res)
      },
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})