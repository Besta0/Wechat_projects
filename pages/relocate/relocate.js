// pages/relocate/relocate.ts
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date1:new Date().toISOString().substring(0, 7),
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value[0]+e.detail.value[1]+e.detail.value[2]+e.detail.value[3])
    this.setData({
      date1: e.detail.value
    })
  },

  btnSub(res){
  
    var year=this.data.date1[0]+this.data.date1[1]+this.data.date1[2]+this.data.date1[3];
    var month=this.data.date1[5]+this.data.date1[6];
    var user_id="1234";
    var money=res.detail.value.money;
    var remark=res.detail.value.remark;
    db.collection("target_list").add({
      data:{
        month:month,
        year:year,
        user_id:user_id,
        money:money,
        remark:remark
      }
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