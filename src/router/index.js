import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'

// 导入组件
// const Login = () => import('@/views/Login/login')
const Home = () => import('@/views/Home/Home')
const Login = () => import('@/views/Login/Login')
const Organization = () => import('@/views/Organization/Organization')
const Organizationadd = () => import('@/views/Organization/Organizationadd')
const Policy = () => import('@/views/Policy/Policy')
const Policyadd = () => import('@/views/Policy/Policyadd')
const Personnel = () => import('@/views/Personnel/Personnel')
const Personneladd = () => import('@/views/Personnel/Personneladd')
const Product = () => import('@/views/Product/Product')
const Productadd = () => import('@/views/Product/Productadd')
const Framework = () => import('@/views/Framework/Framework')
const Client = () => import('@/views/Client/Client')
const Statistics = () => import('@/views/Statistics/Statistics')

Vue.use(Router)
Vue.use(Element)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      // 子路由，将来子路由的切换 是在Home组件中完成的
      // 子路由使用之前，home组件已经创建完毕
      children: [
        // 保单管理
        {
          name: 'policy',
          path: '/policy',
          component: Policy
        },
        // 新增保单
        {
          name: 'policy-add',
          path: '/policy/add',
          component: Policyadd
        },
        // 保险机构
        {
          name: 'organization',
          path: '/organization',
          component: Organization
        },
        // 新增机构
        {
          name: 'organization-add',
          path: '/organization/add',
          component: Organizationadd
        },
        // 产品管理
        {
          name: 'product',
          path: '/product',
          component: Product
        },
        // 新增产品
        {
          name: 'product-add',
          path: '/product/add',
          component: Productadd
        },
        // 人员管理
        {
          name: 'personnel',
          path: '/personnel',
          component: Personnel
        },
        // 新增人员
        {
          name: 'personnel-add',
          path: '/personnel/add',
          component: Personneladd
        },
        // 架构管理
        {
          name: 'framework',
          path: '/framework',
          component: Framework
        },
        // 客户管理
        {
          name: 'client',
          path: '/client',
          component: Client
        },
        // 统计管理
        {
          name: 'statistics',
          path: '/statistics',
          component: Statistics
        }
      ]
    }
  ]
})

export default router
