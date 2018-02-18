App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("onLaunch")
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  },
  getInfo: function (words,cb){
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/search/', //仅为示例，并非真实的接口地址
      data: {
        word: words
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      }
      // ,fail: function (res){
      //   cb(res.data);
      // }
    })
  },
  getSen: function (wordsid,cb){
    const requestTask = wx.request({
      url: 'https://api.shanbay.com/bdc/example/', //仅为示例，并非真实的接口地址
      data: {
        vocabulary_id: wordsid,
        "type": "sys"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        cb(res.data);
      },fail: function (res){
        cb(res.data);
      }
    })
  }
})
