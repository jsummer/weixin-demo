//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    entry:[
      {
        text: '扫描打卡',
        image: '',
        href: ''
      },
      {
        text: '发起活动',
        image: '',
        href: ''
      },
      {
        text: '寻找活动',
        image: '',
        href: ''
      },
      {
        text: '加入组织',
        image: '',
        href: ''
      },
      {
        text: '志愿项目',
        image: '',
        href: ''
      },
      {
        text: '志愿培训',
        image: '',
        href: '../../pages/logs/logs'
      },
      {
        text: '志愿福利',
        image: '',
        href: ''
      },
      {
        text: '志愿心声',
        image: '',
        href: ''
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeName: function () {
    this.setData({
      motto: 'lihao'
    })
  },
  onLoad: function () {

    console.log('onLoad')
    wx.request({
  url: 'http://10.10.1.6:8000/api/newsInfo?pn=1&ps=5', //仅为示例，并非真实的接口地址
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'Content-Type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
  }
})
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

/**
 * page函数用来注册一个页面，接受一个object参数，其指定页面的初始数据、生命周期函数、事件处理函数等
 * Page({
   data:{
     String1
   },
   onLoad:function(options){
     // 页面初始化 options为页面跳转所带来的参数
     // 一个页面只会调用一次，接受参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的query
     String2
   },
   onReady:function(){
     // 页面渲染完成
     //一个页面只会调用一次，代表页面已经准备妥当，可以与视图层进行交互
     //对界面的设置如如wx.setNavgationBarTitle请在onReady之后设置
     String3
   },
   onShow:function(){
     // 页面显示
     //每次打开页面都会调用一次
     String4
   },
   onHide:function(){
     // 页面隐藏
     //当navigateTo或底部tab切换时调用
     String5
   },
   onUnload:function(){
     // 页面关闭
     // 当redirectTo或navigateBack的时候调用
     String6
   },
   onPullDownRefresh: function(){
     //页面相关事件处理函数--监听用户下拉动作
   },
   onReachBottom: function(){
     //页面上拉触底事件的处理函数
   },
   viewTap: function(){
     this.setData({
       text: 'Set some data for updating view.'
     })
   },
   customData: {
     hi: 'MINA'
   }
 })
 */

/**
 * 1.直接修改this.data无效，无法改变页面状态，还会造成数据不一致
 * 2.单次设置的数据不能超过1024kb，请尽量避免一次设置过多的数据
 */

/**
 * getCurrentPages()
 * 用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面
 * 不要尝试修改页面栈，会导致路由以及页面状态错误
 */

/**
 * 页面栈
 * 框架以栈的形式维护了当前的所有页面，当发生路由切换的时候，页面栈的表现如下
 * 
 * 初始化---新页面入栈
 * 打开新页面---新页面入栈
 * 页面重定向---当前页面出栈，新页面入栈
 * 页面返回---页面不断出栈，直到目标返回页，新页面入栈
 * tab切换---当前页面出栈，新页面入栈
 */