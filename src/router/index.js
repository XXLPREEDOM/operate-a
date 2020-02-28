import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 布局文件
const container = () => import('../components/Container.vue')
// 登录页面
const login = () => import('../views/login/login.vue')
// 首页
const HomePage = () => import('../views/HomePage')

// ----------企业管理
// 企业信息
const EnterpriseMgt = () => import('../views/EnterpriseManage/EnterpriseMgt/index.vue')
// 企业用户
const EnterpriseUser = () => import('../views/EnterpriseManage/EnterpriseUser/index.vue')
// 企业应用
const EnterpriseApplication = () => import('../views/EnterpriseManage/EnterpriseApplication/index.vue')

// ----------应用模板管理

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
    },
    {
      path: '/EnterpriseMange',
      name: 'EnterpriseMange',
      title: '企业管理'
    },
    {
      path: '/EnterpriseMange/EnterpriseMgt',
      name: 'EnterpriseMgt',
      title: '企业信息',
      components: {
        mainRouter: EnterpriseMgt
      }
    },
    {
      path: '/EnterpriseMange/EnterpriseUser',
      name: 'EnterpriseUser',
      title: '企业用户',
      components: {
        mainRouter: EnterpriseUser
      }
    },
    {
      path: '/EnterpriseMange/EnterpriseApplication',
      name: 'EnterpriseApplication',
      title: '企业应用',
      components: {
        mainRouter: EnterpriseApplication
      }
    }
    ]

  }
  ]
})

export default router
