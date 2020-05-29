// pages/homeDetail/homeDetail.js
let that
Page({
  obj:[],
  id: '',
  _id: '',
  likeId: '',
  /**
   * 页面的初始数据
   */
  data: {
    myShow: [],
    flag:true,
    re: []
  },
  like() {
    if(this.data.flag) {
      // 没有喜欢
      this.likeTo();
    } else {
      this.notLike();
    }

    // let flat=!this.data.flag;
    // this.setData({
    //   flag: flat
    // })
    // let db = wx.cloud.database();
    // db.collection('myLike').add({
    //   data:{
    //     isLike:flat
    //   },
    //   success(res){
    //     console.log(res)
    //     that.likeId=res._id
    //   }
    // })

  },

  likeTo() {
    let db = wx.cloud.database();
    db.collection('myLike').add({
      data: {
        _id: that.id
      },
      success(res) {
        that.refreshLike(false)
      }
    })
  },
  notLike() {
    let db = wx.cloud.database();
    db.collection('myLike').doc(that.id).remove({
      success(res) {
        console.log(res)
        that.refreshLike(true)
      }
    })
  },



  reply() {
    wx.navigateTo({
      url: '/pages/replay/replay?id=' + that.id,
    })
  },

  refreshLike(isLike) {
    this.setData({
      flag: isLike
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    this.id = options.id;
    this._id = options._id
    console.log(this.id)
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
    let db = wx.cloud.database();
    db.collection('myTopic').where({
      _id: that.id
    }).get({
      success(res) {
        // console.log(res);
        res.data.map(item => {
          item.time = String(item.time)
        })
        that.setData({
          myShow: res.data
        })
      }
    })
    db.collection('myReply').where({
      id: that.id
    }).get({
      success(res) {
        that.setData({
          re: res.data
        })
      }
    })
    db.collection('myLike').where({
      _id: that.id
    }).get({
      success(res) {
        // console.log('喜欢', res)
        if (res.data.length > 0) {
          // 有记录
          that.refreshLike(false)
          // console.log('123ppp')
        } else(
          that.refreshLike(true)
        )
        // console.log('123',res)
      }
    })

  },

show(e){
  console.log(that.data.myShow)
  for(let i = 0 ;i<that.data.myShow[0].images.length;i++){
   that.obj.push(that.data.myShow[0].images[i].path)
  }
  // console.log(e)
  console.log( that.obj)
// return
  let idx = e.currentTarget.dataset.index;
  // return
  wx.previewImage({
    current:that.obj[idx],
    urls: that.obj,
          //当前显示图片
          // current: this.data.topic.images[index],
          //所有图片
          // urls: this.data.topic.images,
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