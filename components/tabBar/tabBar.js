// 引入全局函数
const app = getApp()
Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#d0b4b4",
    selectedColor: "white",
    backgroundColor: "#B81728",
    list: [
      {
        pagePath: "../../pages/index/index",
        iconPath: "/img/home/tj.png",
        selectedIconPath: "/img/home/tj.png",
        jumpType: "switchTab", // 跳转的类型
        text: "推荐",
      },
      {
        pagePath: "../../pages/search/search",
        iconPath: "/img/home/se.png",
        selectedIconPath: "/img/home/se.png",
        jumpType: "switchTab", // 跳转的类型
        text: "搜索"
      },
      {
        pagePath: "/pages/scan/scan",
        bulge:true,
        iconPath: "/img/home/xj.png",
        selectedIconPath: "/img/home/xj.png",
        jumpType: "switchTab", // 跳转的类型
        text: ""
      },
      {
        pagePath: "../../pages/community/community",
        iconPath: "/img/home/sq.png",
        selectedIconPath: "/img/home/sq.png",
        jumpType: "switchTab", // 跳转的类型
        text: "社区",
      },
      {
        pagePath: "../../pages/mine/mine",
        iconPath: "/img/home/mine.png",
        selectedIconPath: "/img/home/mine.png",
        jumpType: "switchTab", // 跳转的类型
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
      console.log(e);
      const data = e.currentTarget.dataset;
      const url = data.path;
      
      if (data.index === this.data.selected) {
        return false
      }
      wx.switchTab({
        url: url
      })
      app.globalData.selected = data.index;
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})

