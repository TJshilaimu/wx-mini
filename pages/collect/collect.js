// pages/collect/collect.js
let that
Page({
  newArr: [],
  arr:[],
  /**
   * 页面的初始数据
   */
  data: {
    myShow: [],
    flag: []
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
    let that = this;
    let db = wx.cloud.database();
    db.collection('myLike').get({
      success(res) {
        console.log(res)
        that.newArr = res.data
        // that.setData({
        //   flag: res.data
        // })

        // console.log(res)
        that.getData()

        //  where({
        //   _id: res.data[i]._id
        // })
      }
    })
  },
  getData() {
    // let arr = [];
    let db = wx.cloud.database();
    // console.log('zzz')
    console.log('arr', that.newArr.length)
    console.log('flag', that.data.flag)
    // // return;
    // for (let i in that.newArr) {
    //   let topicId = that.newArr[i]._id
    //   //去话题表找数据
    //   db.collection("myTopic")
    //     .doc(topicId)
    //     .get({
    //       success(res) {
    //         // console.log('pp',res)
    //         // return
    //         that.data.flag.push(res.data)
    //         that.setData({
    //           myShow: that.data.flag
    //         })
    //         console.log('pp', that.data.flag)
    //       },
    //       fail: console.error
    //     })
    // }

    for (let i = 0; i < that.newArr.length; i++) {
      let ic = that.newArr[i]._id
      console.log('213', that.newArr[i]._id)
      db.collection('myTopic').doc(ic).get({
        success(resp) {
          console.log('op', resp)
          that.arr.push(resp.data)
          console.log(that.arr)
          // return
          that.setData({
            myShow: that.arr
          })
          // arr.push(resp)
        }
      })
    }
    // setTimeout(() => {
    //   console.log(arr)
    //   that.setData({
    //     myShow: arr
    //   })
    // }, 1000)
  },

  zz() {
    console.log(that.data.flag.length)
    console.log(that.data.flag)

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