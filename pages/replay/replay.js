// pages/replay/replay.js
let that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },
  sendCommit(e) {
    // console.log(e);
    let that = this;
    let commit = e.detail.value.commit;
    let db = wx.cloud.database();
    db.collection('myReply').add({
      data: {
        commit: commit,
        id:that.data.id
      },
      success(res) {
        // console.log(that.data.id)
        // wx.navigateTo({
        //   url: '/pages/homeDetail/homeDetail?id=' + that.data.id,
        // })
        wx.navigateBack({})
      }
    })



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
    // console.log(options)
    // this.data.id= options.id
    this.setData({
      id: options.id
    })
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
console.log(this.data.id)
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