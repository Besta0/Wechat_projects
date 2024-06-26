// pages/safe/safe.ts
const db = wx.cloud.database();
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    us:'',
    dataObj:'',
    records:[],
    show: false,
  },

  delbtn :function(e){
    console.log(e.currentTarget.dataset.iid)
    db.collection("user").where({id:e.currentTarget.dataset.iid}).remove({
    }).then(res=>{
      console.log(res);
    })
    wx.showToast({
      title: '成功',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var datao='';
    this.setData({
      us:app.globalData.user_id
    })
    db.collection("user").where({}).get().then(res=>{
      datao=res.data;
      this.setData({
        records:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})