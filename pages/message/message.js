// pages/message/message.js
const db = wx.cloud.database();
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:'',
    records:[],
    month:"0"+String(new Date().getMonth()+1),
    total1:0,
    total2:0,
    tobalance:0,
  },
  
  cal: function (e) {
    var total1b=0;
    var total2b=0;
    var tobalance=0;
    var Obj='';
    var newRecords=[];
    var symbol="-";
    var bal=0;
    p=0;
    g=0;
    db.collection("bill").where({
      month:this.data.month,
      year:'2024',
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.dataObj=res.data;
      })
      console.log(this.dataObj);
      for(var x=1;x<=31;x++){
        var p=0;//总支出
        var g=0;//总收入
        var fo=x;
        if(x/10<1){
          fo="0"+String(x);
        }else fo=String(fo);
        for(var i=0;i<this.dataObj.length;i++){
          if(this.dataObj[i].day==fo){
            if(this.dataObj[i].type=="支出")
              p+=Number(this.dataObj[i].money);
            else g+=Number(this.dataObj[i].money);
          }
          else{}
        }
        total1b+=g;
        total2b+=p;
        var obj={date: "2024-"+this.data.month+"-"+fo, income: g, expense: p, balance: Number(g-p)};//add records
        newRecords.push(obj);
      }
      this.setData({
        records:newRecords,
        total1:total1b,
        total2:total2b,
        tobalance:Number(total1b-total2b)
      })
      console.log(this.records);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var total1b=0;
    var total2b=0;
    var tobalance=0;
    var Obj='';
    var newRecords=[];
    var symbol="-";
    var bal=0;
    p=0;
    g=0;
    db.collection("bill").where({
      month:this.data.month,
      year:'2024',
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.dataObj=res.data;
      })
      console.log(this.dataObj);
      for(var x=1;x<=31;x++){
        var p=0;//总支出
        var g=0;//总收入
        var fo=x;
        if(x/10<1){
          fo="0"+String(x);
        }else fo=String(fo);
        for(var i=0;i<this.dataObj.length;i++){
          if(this.dataObj[i].day==fo){
            if(this.dataObj[i].type=="支出")
              p+=Number(this.dataObj[i].money);
            else g+=Number(this.dataObj[i].money);
          }
          else{}
        }
        total1b+=g;
        total2b+=p;
        var obj={date: "2024-"+this.data.month+"-"+fo, income: g, expense: p, balance: Number(g-p)};//add records
        newRecords.push(obj);
      }
      this.setData({
        records:newRecords,
        total1:total1b,
        total2:total2b,
        tobalance:Number(total1b-total2b)
      })
      console.log(this.records);
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
    var total1b=0;
    var total2b=0;
    var tobalance=0;
    var Obj='';
    var newRecords=[];
    var symbol="-";
    var bal=0;
    p=0;
    g=0;
    db.collection("bill").where({
      month:this.data.month,
      year:'2024',
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.dataObj=res.data;
      })
      console.log(this.dataObj);
      for(var x=1;x<=31;x++){
        var p=0;//总支出
        var g=0;//总收入
        var fo=x;
        if(x/10<1){
          fo="0"+String(x);
        }else fo=String(fo);
        for(var i=0;i<this.dataObj.length;i++){
          if(this.dataObj[i].day==fo){
            if(this.dataObj[i].type=="支出")
              p+=Number(this.dataObj[i].money);
            else g+=Number(this.dataObj[i].money);
          }
          else{}
        }
        total1b+=g;
        total2b+=p;
        var obj={date: "2024-"+this.data.month+"-"+fo, income: g, expense: p, balance: Number(g-p)};//add records
        newRecords.push(obj);
      }
      this.setData({
        records:newRecords,
        total1:total1b,
        total2:total2b,
        tobalance:Number(total1b-total2b)
      })
      console.log(this.records);
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