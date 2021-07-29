import Vue from 'vue'
import Vuex from 'vuex'

// 各个系统的状态管理器请在此处引入
import centerServStore from '@/app/centerServ/store' // 云中台
import fceStore from '@/app/fce/store' // 综合执法
import gridStore from '@/app/grid/store' // 网格化林长制管理平台
import monitorStore from '@/app/monitor/store' // 动态监管系统
import viewStore from '@/app/view/store' // 综合态势展示系统

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    centerServStore, // 云中台
    fceStore, // 综合执法
    gridStore, // 网格化林长制管理平台
    monitorStore, // 动态监管系统
    viewStore, // 综合态势展示系统
  }
})
