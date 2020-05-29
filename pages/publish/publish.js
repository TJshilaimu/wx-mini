// pages/publish/publish.js
let that
Page({
  user: {},
  /**
   * 页面的初始数据
   */
  data: {
    images: []
  },
  /**
   * 选择图片
   */
  chooseImg() {
    wx.chooseImage({
      count: 9,
      complete: (res) => {
        // console.log(res)

        let arr = [];
        arr = res.tempFiles;
        // console.log(arr)
        // return
        for (let i = 0; i < arr.length; i++) {
          wx.cloud.uploadFile({
            cloudPath: that.myTimer(new Date()),
            filePath: arr[i].path
          })
        }
        let arr1 = that.data.images.concat(arr);
        that.setData({
          images: arr1
        })
      },
    })
  },
  myTimer(time) {
    let random = Math.floor(Math.random() * 10000 + 100)
    let str = random + '_' + time.getMilliseconds() + '.png'
    return str
  },


  /***
   * 点击发布
   */
  submit(e) {
    console.log('2')
    let i = e.detail.value.text;
    let db = wx.cloud.database();
    db.collection('myTopic').add({
      data: {
        text: i,
        time: new Date(),
        user: that.user,
        images: that.data.images
      },
      success(res) {
        wx.showToast({
          title: '发布中',
          icon: 'none',
          duration: 500
        })
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/home/home',
          })
        }, 100)
      }
    })
  },
  deleteImg(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index;
    that.data.images.splice(index, 1);
    let newArr = that.data.images;
    that.setData({
      images: newArr
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
    wx.getUserInfo({
      success(res) {
        that.user = res.userInfo
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