//app.js
//App()函数用来注册一个小程序，接受一个object参数，其指定小程序的生命周期函数等
//onLaunch 生命周期函数--监听小程序初始化，全局触发一次
//onShow  生命周期函数--监听小程序显示，当小程序启动，或从后台进入前台显示，会触发onShow
//onHide  生命周期函数--监听小程序隐藏，当小程序从前台进入后台，会触发onHide
//其他    开发者可以添加任意的函数或数据到Object参数中，用this可以访问
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})

/** 
 * 注意：
 * App()必须在app.js中注册，且不能注册多个。
 * 不要在定义于App()内的函数中调用getApp()，使用this就可以拿到app实例
 * 不要在onLanuch的时候调用getCurrentpPage()，此时page还没有生成
 * 通过getApp()获取实例后，不要私自调用生命周期函数
 */