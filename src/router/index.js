import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 起到一个重定向的作用
    redirect: 'recommend',
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/Recommend.vue'),
        children:[
          {
            path:':id',
            name:'recommend-list',
            component: () => import(/* webpackChunkName: "recommend" */ '../views/RecommendList'),
          }
        ]
      },
      {
        path: 'rank',
        name: 'rank',
        component: () => import(/* webpackChunkName: "rank" */ '../views/Rank.vue')
      },
      {
        path: 'singers',
        name: 'singers',
        component: () => import(/* webpackChunkName: "singers" */ '../views/Singers.vue')
      },
     
    ]
  },
  {
    path:'**',
    redirect:'/recommend'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
