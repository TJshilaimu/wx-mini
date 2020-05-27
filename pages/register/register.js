// pages/register/register.js


Page({
  name: '',
  pwd: '',
  /**
   * 页面的初始数据
   */
  data: {
user:''
  },
  register(e) {
    // console.log(e)
    let data = {
      name : e.detail.value.inpName,
      pwd :e.detail.value.inpPwd
    }
    // console.log(data);
    // return
    wx.cloud.callFunction({
      name:'register',
      data:data
    }).then(res =>{
      console.log(res)
    })
  },


cs(){
let db = wx.cloud.database();
db.collection("stu").get({
  complete(res){
    console.log(res)
  }
})




  // wx.cloud.callFunction({
  //   name:'register',
  //   data:{
  //     a:10,
  //     b:20
  //   },
  //   complete:res=>{
  //     console.log(res)
  //   }
  // })
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