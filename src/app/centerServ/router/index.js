export default [
  {
    path: '',
    name: 'index',
    component: () => import(/* webpackChunkName: "dynamic-Index" */ '../views/Index.vue')
  }
]
