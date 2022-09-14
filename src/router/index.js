import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Regis from '../views/Regis.vue'
import Profile from '../views/Profile.vue'
import Product from '../views/Product.vue'
import EditeView from '../views/EditeView.vue'
import CreateProduct from '../views/CraeteProduct.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // <HomeView>
    //   <Login/>
    // </HomeView>
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/regis',
    name: 'regis',
    component: Regis 
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile 
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  }, 
  {

    path: '/edit/:id',
    name: 'edit',
    component: EditeView,
  },
  {

    path: '/createP',
    name: 'createP',
    component:  CreateProduct,
  }
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
