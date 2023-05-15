import {
  seachWxUserInfo,
  rightsInfo
} from '../../api/userinfo' //查询用户信息

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    info: {},
    vip_admin: null, //false :未注册 true :贵宾
    gh_admin: null, //true 工行工作人员
    gt_common: null, //true 高铁工作人员
    jc_common: null, //true 机场工作人员

    // 服务指南
    guide: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.getLocale());
  },
   // 服务指南
  handleGuide(){
    let that = this
    that.guide.showlog()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    // this.init(options)
    this.guide = this.selectComponent(".guide");
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({  // 文档中有介绍 getTabBar用于获取当前组件实例
        selected: 0
      })
    }
  },
  // 用户授权获取头像信息
  handleAccredit(e) {
    this.init()
  },
  init() {
    //父组件获取子组件对象方法,根据样式获取，建议使用selectAllComponents
    this.logo = this.selectComponent(".logo");
    //判断缓存中有没有授权信息，如果没有就显示弹窗，有就直接隐藏弹窗
    seachWxUserInfo().then(res => {
      if (res.code == '200') {
        if (res.data.vip_admin) {
          app.globalData.openid = res.data.vip.wxOpenid
          app.globalData.vId = res.data.vip.id
          app.globalData.isPlatinumCard = res.data.vip.isPlatinumCard
        } else {
          // this.logo.showDialog();//调用子组件的方法
        }
      } else {

      }
    })
    rightsInfo().then(res=>{
      if (res.code == 200) {
        app.globalData.cardJudge = res.data
      }
    })
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

  },
})