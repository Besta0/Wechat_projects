// pages/graph/graph.js
import wxCharts from '../../API/wxcharts.js'
const db = wx.cloud.database();
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:'',
    dd:[],
    mm:[],
    p2:[],//支出
    p1:[]//收入
  },
  cal:function(e){
    var mmb=[];
    var ddb=[];
    var p1b=[];
    var p2b=[];
    var currentDate=new Date();
    db.collection("bill").where({
      // month:this.data.month,
      // year:'2024',
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.dataObj=res.data;
      })
      console.log(currentDate);
      
      for(var i=0;i<7;i++){
        // 将当前日期减去七天
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - i);
      // 获取年、月、日
      const y = String(sevenDaysAgo.getFullYear());
      var m = sevenDaysAgo.getMonth() + 1; // 月份从 0 开始，需要加 1
      if(m/10<1){
        m="0"+String(m);
      }else m=String(m);
      mmb.push(m);
      var d = String(sevenDaysAgo.getDate());
      if(d/10<1){
        d="0"+String(d);
      }else d=String(d);
      ddb.push(d);
      this.setData({
        dd:ddb,
        mm:mmb
      })
      console.log(y, this.data.mm[i], this.data.dd[i]);
      }
      console.log(this.dataObj)
      for(var i=6;i>=0;i--){
        var p=0;
        var g=0;
        for(var v=0;v<this.dataObj.length;v++){
          if(this.dataObj[v].day==ddb[i]&&this.dataObj[v].month==mmb[i]){
            if(this.dataObj[v].type=="支出")
              p+=Number(this.dataObj[v].money);
            else g+=Number(this.dataObj[v].money);
          }
          else{}
        }
        p1b.push(p);
        p2b.push(g);

      }
      this.setData({
        p1:p1b,
        p2:p2b
      })
      //console.log(p1b);
      //console.log(p2b);
      wx.startPullDownRefresh({
        success: function() {
          console.log('下拉刷新触发');
        }
      });
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
    var mmb=[];
    var ddb=[];
    var p1b=[];
    var p2b=[];
    var currentDate=new Date();
    db.collection("bill").where({
      month:'05',
      year:'2024',
      user_id:app.globalData.user_id
    }).get().then(res=>{
      this.dataObj=res.data;
      })
      console.log(currentDate);
      
      for(var i=0;i<7;i++){
        // 将当前日期减去七天
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - i);
      // 获取年、月、日
      const y = String(sevenDaysAgo.getFullYear());
      var m = sevenDaysAgo.getMonth() + 1; // 月份从 0 开始，需要加 1
      if(m/10<1){
        m="0"+String(m);
      }else m=String(m);
      mmb.push(m);
      var d = String(sevenDaysAgo.getDate());
      if(d/10<1){
        d="0"+String(d);
      }else d=String(d);
      ddb.push(d);
      this.setData({
        dd:ddb,
        mm:mmb
      })
      console.log(y, this.data.mm[i], this.data.dd[i]);
      }
      console.log(this.dataObj)
      for(var i=6;i>=0;i--){
        var p=0;
        var g=0;
        for(var v=0;v<this.dataObj.length;v++){
          if(this.dataObj[v].day==ddb[i]&&this.dataObj[v].month==mmb[i]){
            if(this.dataObj[v].type=="支出")
              p+=Number(this.dataObj[v].money);
            else g+=Number(this.dataObj[v].money);
          }
          else{}
          //console.log(this.dataObj[v].day+'|'+ddb[i]+this.dataObj[v].month+'|'+mmb[i])//测试
        }
        
        p1b.push(p);
        //console.log(p)
        p2b.push(g);
        //console.log(g)

      }
      this.setData({
        p1:p1b,
        p2:p2b
      })
new wxCharts({
  canvasId: 'lineCanvas',
  type: 'line',
  categories: [this.data.mm[6]+'-'+this.data.dd[6], this.data.mm[5]+'-'+this.data.dd[5], this.data.mm[4]+'-'+this.data.dd[4], 
  this.data.mm[3]+'-'+this.data.dd[3], this.data.mm[2]+'-'+this.data.dd[2], this.data.mm[1]+'-'+this.data.dd[1],this.data.mm[0]+'-'+this.data.dd[0]],
  series: [{
      name: '收入',
      data: this.data.p2,
      format: function (val) {
          return val.toFixed(2) + '';
      }
  }, {
      name: '支出',
      data: this.data.p1,
      format: function (val) {
          return val.toFixed(2) + '';
      }
  }],
  yAxis: {
      title: '金额(元)',
      format: function (val) {
          return val.toFixed(2);
      },
      min: 0
  },
  width: 360,
  height: 360
});
new wxCharts({
  canvasId: 'areaCanvas',
  type: 'area',
  categories: [this.data.mm[6]+'-'+this.data.dd[6], this.data.mm[5]+'-'+this.data.dd[5], this.data.mm[4]+'-'+this.data.dd[4], 
  this.data.mm[3]+'-'+this.data.dd[3], this.data.mm[2]+'-'+this.data.dd[2], this.data.mm[1]+'-'+this.data.dd[1],this.data.mm[0]+'-'+this.data.dd[0]],
  series: [{
      name: '收入',
      data: this.data.p2,
      format: function (val) {
          return val.toFixed(2) + '';
      }
  }, {
      name: '支出',
      data: this.data.p1,
      format: function (val) {
          return val.toFixed(2) + '';
      }
  }],
  yAxis: {
      format: function (val) {
          return val ;
      }
  },
  width: 360,
  height: 360
});
new wxCharts({
  canvasId: 'columnCanvas',
  type: 'column',
  categories: [this.data.mm[6]+'-'+this.data.dd[6], this.data.mm[5]+'-'+this.data.dd[5], this.data.mm[4]+'-'+this.data.dd[4], 
  this.data.mm[3]+'-'+this.data.dd[3], this.data.mm[2]+'-'+this.data.dd[2], this.data.mm[1]+'-'+this.data.dd[1],this.data.mm[0]+'-'+this.data.dd[0]],
  series: [{
      name: '收入',
      data: this.data.p2
  }, {
      name: '支出',
      data: this.data.p1
  }],
  yAxis: {
      format: function (val) {
          return val + '';
      }
  },
  width: 360,
  height: 360
});
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