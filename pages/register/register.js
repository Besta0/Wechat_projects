// pages/register/register.ts
const db = wx.cloud.database();
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    choice:"0",
    dataObj:'',
  },

  //登录注册页面切换
  showR(){
    this.setData({
      choice:"0"
    })
  },
  showG(){
    this.setData({
      choice:"1"
    })
  },

 //注册
  register: function (e) {
    const formData = e.detail.value;
    var id=formData.id;
    var name=formData.name;
    var phone=formData.phone;
    var password=formData.password;
    var mail=formData.mail;
    var address=formData.address;
    db.collection("user").add({
      data:{
        id:id,
        name:name,
        phone:phone,
        password:password,
        mail:mail,
        address:address
      }
    }).then(res=>{
      console.log(res);
    })
    wx.showToast({
      title: '注册成功',
    })

    //在这里执行注册逻辑，可以将 formData 发送到服务器进行处理

    console.log(formData);
  },
 //登录
  login: function (e) {
    var flag=0;
    const formData = e.detail.value;
    var userId = formData.id;
    var password = formData.password;
    // 在这里执行登录逻辑，可以将 userId 和 password 发送到服务器进行验证
     db.collection('user').get().then(res=>{
       this.setData({
         dataObj:res.data,
       })
       for(var i in res.data){
        if(res.data[i].id==userId && res.data[i].password==password){
          app.globalData.user_id=userId;
          flag=1;
          console.log("最新id："+app.globalData.user_id);
        }
       }
       //console.log("flag："+flag);
      if(flag){
        console.log("登录成功");
        wx.showToast({
          title: '登录成功',
        })
      }else{
        console.log("登录失败");
        wx.showToast({
          icon:"error",
          title: '登录失败',
        })
      }
    console.log("用户号: " + userId);
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