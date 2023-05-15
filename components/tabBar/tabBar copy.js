// components/tabBar/tabBar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    color: "black",
    selectedColor: "#B81728",
    backgroundColor: "#B81728",
    list: [
      {
        pagePath: "../../pages/index/index",
        iconPath: "/img/home-a.png",
        selectedIconPath: "/img/home.png",
        text: "推荐",
      },
      {
        pagePath: "../../pages/search/search",
        iconPath: "/img/mine-a.png",
        selectedIconPath: "/img/mine.png",
        text: "搜索"
      },
      {
        pagePath: "/pages/scan/scan",
        bulge:true,
        iconPath: "/img/mine-a.png",
        selectedIconPath: "/img/mine.png",
        text: "shij"
      },
      {
        pagePath: "../../pages/community/community",
        iconPath: "/img/no-star.png",
        selectedIconPath: "/img/scan/pz.png",
        text: "社区",
      },
      {
        pagePath: "../../pages/mine/mine",
        iconPath: "/img/mine-a.png",
        selectedIconPath: "/img/mine.png",
        text: "我的"
      },
    ]
  },
  ready: function() {
    this.setData({
      selected: app.globalData.selected
    })
  },
/**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      // console.log(e);
      const data = e.currentTarget.dataset;
      const url = data.path;
      app.globalData.selected = data.index;
      wx.switchTab({url})
    }
  },
  switchTab(e) {
    // console.log(e);
    const data = e.currentTarget.dataset;
    const url = data.path;
    app.globalData.selected = data.index;
    wx.switchTab({url})
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