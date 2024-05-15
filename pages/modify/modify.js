// pages/modify/modify.ts

const db = wx.cloud.database();
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:'',
    tmp:1,
    monn1:'',
  },
  btnSub(res){
    var money=res.detail.value.money;
    console.log(money);
    db.collection("bill").doc(this.data.dataObj._id).update({
      data:{
        money:money
      }
    }).then(res=>{
      console.log(res);
    })
    wx.showToast({
      title: '成功',
    })
  },
  btndel:function (e){
    db.collection("bill").doc(this.data.dataObj._id).remove({
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
    this.setData({
      dataObj:app.globalData.dataObjBack
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