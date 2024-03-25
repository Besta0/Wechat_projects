// pages/detail/detail.js
const db = wx.cloud.database();
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date1: new Date().toISOString().substring(0, 7),
    dataObj:'',
    pay_money:0,
    get_money:0,
  },
  //日期选择单位为月份
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var p=0;//总支出
    var g=0;//总收入
    this.setData({
      date1: e.detail.value
    })
    db.collection("bill").where({
      year:this.data.date1[0]+this.data.date1[1]+this.data.date1[2]+this.data.date1[3],
      month:this.data.date1[5]+this.data.date1[6],
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.setData({
        dataObj:res.data
      }) 
      console.log(this.data.dataObj);
      //计算总收支
      for(var i in res.data){
        //console.log(res.data[i].money); 
        if(res.data[i].type=="支出")
        p+=Number(res.data[i].money);
        else g+=Number(res.data[i].money);
        //console.log(p);
      }
      this.setData({
        pay_money:p,
        get_money:g
      })
    })


  },
  //返回id测试
  backId:function (e) {
    console.log(e.currentTarget.dataset.id);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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