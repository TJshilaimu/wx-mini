let that

// pages/home/home.js
Page({
num:3,
pages:1,
total:0,
  /**
   * 页面的初始数据
   */
  data: {
    myShow: []
  },
  getData() {
    let db = wx.cloud.database();
    db.collection('myTopic')
    .orderBy('time','desc').limit(that.num)
    .get({
      success(res) {
        res.data.map(item => {
          item.time = String(item.time)
        })
        that.setData({
          myShow: res.data
        })
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh()
      }
    })
  },

detail(e){
  // console.log(e)
  let info = e.currentTarget.dataset.info;
  // console.log(info)

  wx.navigateTo({
    url: '/pages/homeDetail/homeDetail?id=' + info,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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
    that.getData();
    this.getDataCount()
  },

getDataCount(){
  let db = wx.cloud.database();
  db.collection('myTopic').count({
    success(res){
      that.total= res.total
    }
  })
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
    wx.showNavigationBarLoading();
    this.getData()
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
if(that.data.myShow.length < that.total){
  //可以继续拉取
  let db = wx.cloud.database();
  db.collection('myTopic')
  .orderBy('time','desc').skip(that.pages * that.num).limit(that.num)
  .get({
    success(res) {
      res.data.map(item => {
        item.time = String(item.time)
      })
      let other = that.data.myShow.concat(res.data)
      that.setData({
        myShow: other
      })
    }
  })
}else{
 wx.showToast({
    title: '没有更多数据了',
    duration: 1000,
  })
}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})