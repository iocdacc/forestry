import Vue from 'vue'
import VueRouter from 'vue-router'

// 布局
import Layout from '../layout/Layout'

// 页面
import Error404 from '../views/Error404'

// 各个系统的路由请在此处引入
// 各开发人员请注意，页面组件请动态加载。
import centerServRoutes from '@/app/centerServ/router' // 云中台
import fceRoutes from '@/app/fce/router' // 综合执法
import gridRoutes from '@/app/grid/router' // 网格化林长制管理平台
import monitorRoutes from '@/app/monitor/router' // 动态监管系统
import viewRoutes from '@/app/view/router' // 综合态势展示系统

Vue.use(VueRouter)

const routes = [
  { // 云中台
    path: '/center',
    name: 'center',
    component: Layout,
    children: centerServRoutes
  },
  { // 综合执法
    path: '/fce',
    name: 'fce',
    component: Layout,
    children: fceRoutes
  },
  { // 网格化林长制管理平台
    path: '/grid',
    name: 'grid',
    component: Layout,
    children: gridRoutes
  },
  { // 动态监管系统
    path: '/',
    name: 'monitor',
    component: Layout,
    children: monitorRoutes
  },
  { // 综合态势展示系统
    path: '/view',
    name: 'view',
    component: Layout,
    children: viewRoutes
  },
  { // 404
    path: '/404',
    name: '404',
    component: Error404
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => to.matched.length === 0 ? next('/404') : next())

export default router
