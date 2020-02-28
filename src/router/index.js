import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 布局文件
const container = () => import('../components/Container.vue')
// 登录页面
const login = () => import('../views/login/login.vue')
// 首页
const HomePage = () => import('../views/HomePage')

const router = new VueRouter({
  mode: 'history',
  base: 'admin',
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/HomePage'
  },
  {
    path: '/login',
    name: 'login',
    components: {
      mainRouter: login
    }
  },
  {
    path: '/container',
    name: 'container',
    components: {
      mainRouter: container
    },
    children: [{
      path: '/HomePage',
      name: 'HomePage',
      components: {
        mainRouter: HomePage
      }
    }]

  }
  ]
})

export default router
