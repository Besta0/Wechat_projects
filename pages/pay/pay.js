// pages/pay/pay.js
const db = wx.cloud.database()
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choice:"0",
    date1:new Date().toISOString().substring(0, 10),
    dataObj:"",
    image_s:["/static/images/pay/eat.png",
    "/static/images/pay/hotel.png",
    "/static/images/pay/shop.png",
    "/static/images/pay/tran.png",
    "/static/images/pay/travel.png",
    "/static/images/income/money_man.png",
    "/static/images/income/salary.png",
    "/static/images/income/pt.png",
    "/static/images/income/red.png",
    "/static/images/income/other.png"
  ],
    pay_selected:"",
    pay_type:["餐饮","住宿","购物","交通","旅游"],
    path0:"/static/images/pay/eat.png",
    path1:"/static/images/pay/hotel.png",
    path2:"/static/images/pay/shop.png",
    path3:"/static/images/pay/tran.png",
    path4:"/static/images/pay/travel.png",

    path00:"/static/images/income/money_man.png",
    path11:"/static/images/income/salary.png",
    path22:"/static/images/income/pt.png",
    path33:"/static/images/income/red.png",
    path44:"/static/images/income/other.png",

    image_c:["/static/images/pay/eat_a.png",
    "/static/images/pay/hotel_a.png",
    "/static/images/pay/shop_a.png",
    "/static/images/pay/tran_a.png",
    "/static/images/pay/travel_a.png",
    "/static/images/income/money_man_a.png",
    "/static/images/income/salary_a.png",
    "/static/images/income/pt_a.png",
    "/static/images/income/red_a.png",
    "/static/images/income/other_a.png"]
  },

  //支出和收入页面切换
  showPay(){
    this.setData({
      choice:"0"
    })
  },
  showGet(){
    this.setData({
      choice:"1"
    })
  },

  //图片被点击
  onClickpic:function(e){
    if(e.currentTarget.dataset.ty=="0"){
      this.setData({
        path0:this.data.image_c[0],
        pay_selected:this.data.pay_type[0]
      })
    }else{
      this.setData({
        path0:this.data.image_s[0],
      })
    }
    if(e.currentTarget.dataset.ty=="1"){
      this.setData({
        path1:this.data.image_c[1],
        pay_selected:this.data.pay_type[1]
      })
    }else{
      this.setData({
        path1:this.data.image_s[1],
      })
    }
    if(e.currentTarget.dataset.ty=="2"){
      this.setData({
        path2:this.data.image_c[2],
        pay_selected:this.data.pay_type[2]
      })
      console.log(this.data.pay_selected)
    }else {
      this.setData({
        path2:this.data.image_s[2],
      })
    }
    if(e.currentTarget.dataset.ty=="3"){
      this.setData({
        path3:this.data.image_c[3],
        pay_selected:this.data.pay_type[3]
      })
    }else{
      this.setData({
        path3:this.data.image_s[3],
      })
    }
    if(e.currentTarget.dataset.ty=="4"){
      this.setData({
        path4:this.data.image_c[4],
        pay_selected:this.data.pay_type[4]
      })
    }else{
      this.setData({
        path4:this.data.image_s[4],
      })
    }
    if(e.currentTarget.dataset.ty=="5"){
      this.setData({
        path00:this.data.image_c[5],
        pay_selected:this.data.pay_type[5]
      })
    }else{
      this.setData({
        path00:this.data.image_s[5],
      })
    }
    if(e.currentTarget.dataset.ty=="6"){
      this.setData({
        path11:this.data.image_c[6],
        pay_selected:this.data.pay_type[6]
      })
    }else{
      this.setData({
        path11:this.data.image_s[6],
      })
    }
    if(e.currentTarget.dataset.ty=="7"){
      this.setData({
        path22:this.data.image_c[7],
        pay_selected:this.data.pay_type[7]
      })
    }else{
      this.setData({
        path22:this.data.image_s[7],
      })
    }
    if(e.currentTarget.dataset.ty=="8"){
      this.setData({
        path33:this.data.image_c[8],
        pay_selected:this.data.pay_type[8]
      })
    }else{
      this.setData({
        path33:this.data.image_s[8],
      })
    }
    if(e.currentTarget.dataset.ty=="9"){
      this.setData({
        path44:this.data.image_c[9],
        pay_selected:this.data.pay_type[9]
      })
    }else{
      this.setData({
        path44:this.data.image_s[9],
      })
    }
  },

  //获取数据
  getData(){
    db.collection("demolist").get({
      success:res=>{
        console.log(res) 
        this.setData({
          dataObj:res.data
        })
      }
    })
    // db.collection("Counters").get({
    //   sucess:function(res){
    //     console.log(res)
    //   }
    // })
  },
  //日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  //提交表单添加到数据库
  btnSub(res){
  
    var year=this.data.date1[0]+this.data.date1[1]+this.data.date1[2]+this.data.date1[3];
    var month=this.data.date1[5]+this.data.date1[6];
    var day=this.data.date1[8]+this.data.date1[9];
    var user_id=app.globalData.user_id;
    if(this.data.choice=="0")var type="支出";
    else type="收入";
    var money=res.detail.value.money;
    var remark=res.detail.value.remark;
    db.collection("bill").add({
      data:{
        day:day,
        month:month,
        year:year,
        user_id:user_id,
        type:type,
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