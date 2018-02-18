var app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"",
    checkWord:null,
    sentext:""
  },

  btnClick: function (){
    var thispage = this;
    app.getInfo(this.data.checkWord,function (data){
      if (data.data.cn_definition){
        console.log(data.data.id);
        thispage.setData({ text: data.data.cn_definition.defn });
        app.getSen(data.data.id,function (data){
          var sen = (data.data)[0].annotation;
          sen = sen.replace(/<[^>]+>/g, "");
          var tran = (data.data)[0].translation;
          var showText = "例句:"+"\n"+sen+"\n"+tran;
          thispage.setData({ sentext: showText});
          console.log(sen);
        })
      }else{
        thispage.setData({ text: "查询不到这个单词" });
        thispage.setData({ sentext: "" });
      }
    })
  },
  wordInput: function(e){
    console.log(e);
    this.setData({checkWord:e.detail.value});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})