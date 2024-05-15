
// pages/profile/profile.js
const db = wx.cloud.database();
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:"/static/images/default.jpg",
    name:'请登录',
    address:"点我授权"
  },

  out:function (){
    this.setData({
      name:'请登录',
    })
    app.globalData.user_id='请登录'
  },
  
  getUser:function(){
    // //wx.openSetting({});
    // var that=this;
    // //调用微信接口获取用户信息
    // wx.getUserInfo({
    //   success:function(res){
    //     //成功后
    //     console.log("登录成功",res)
    //     that.setData({
    //       name:res.userInfo.nickName,
    //       path:res.userInfo.avatarUrl
    //     })
    //   },
    //   fail:function(res){
    //     //失败后
    //     console.log('登录失败',res)
    //   }
    // })
    this.setData({
      name:app.globalData.user_id,
    })
    app.globalData.user_id='请登录'
  },
//获取地址
  getLocalPath:function(){
    var that=this;
    //wx.openSetting({});
    wx.chooseLocation({
      success:function(res){
        console.log(res);
        that.setData({address:res.address})
      }
    })
  },

  goToSettings: function() {
    // 设置按钮的点击事件处理逻辑
    console.log('跳转到设置页面');
    // 进行页面跳转或其他操作
  },
  
  goToHelp: function() {
    // 使用帮助按钮的点击事件处理逻辑
    console.log('跳转到使用帮助页面');
    // 进行页面跳转或其他操作
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  
  goToFeedback: function() {
    // 意见反馈按钮的点击事件处理逻辑
    console.log('跳转到意见反馈页面');
    // 进行页面跳转或其他操作

  },
  
  goToSecurityCenter: function() {
    // 安全中心按钮的点击事件处理逻辑
    console.log('跳转到安全中心页面');
    // 进行页面跳转或其他操作
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
    this.setData({
      name:app.globalData.user_id,
    })
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