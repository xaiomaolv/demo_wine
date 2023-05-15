//app.js
import locales from './i18n/i18n'
import {
  initPage,
  onPageLoad
} from './utils/page'
import request from './utils/request'
import util from './utils/util'

App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        console.log(res,'res');
          this.globalData.statusBarHeight = res.statusBarHeight;
      }
  })
    // 获取语言
    const locale = wx.getStorageSync('locale')
    console.log(locale,'ddddddd');
    if (locale) {
      this.T = locales[locale]
    } else { // 默认语言为中文
      // this.T = locales.zh
    }
    // 重构Page对象
    initPage(this)
  },
  // 设置语言
  setLocale(locale) {
    // 保存语言到本地存储，以后打开不需要重新设置
    wx.setStorageSync('locale', locale)
    this.T = locales[locale]
    // 重新设置title和T
    onPageLoad(this)
  },
  // 获取当前语言
  getLocale() {
    return wx.getStorageSync('locale') || 'zh'
  },
  // 挂载全局request，使用app.request 替代wx.request
  ...request,
  // 挂载全局工具类
  ...util,
  // api: [...api],
  // setToken(token) {
  //   wx.setStorageSync('token', token)
  // },
  // getToken() {
  //   return wx.getStorageSync('token')
  // },

  setCode(code) {
    wx.setStorageSync('code', code)
  },
  getCode() {
    return wx.getStorageSync('code')
  },
  // 是否开启logger
  loggerEnable: true,
  openid: null,
  globalData: {
    statusBarHeight:0,
    selected: 0,
    userInfo: null,
    tablist:[
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
  }
})

// api需要等待app初始化完成
getApp().api = require('./api/api').default