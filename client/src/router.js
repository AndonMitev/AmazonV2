import Vue from 'vue'
import Router from 'vue-router'
import CategoriesPage from '../src/components/Home/CategoriesPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoriesPage
    },
    {
      path: '/product/create',
      name: 'create',
      component: () => import('./components/ProductCreatingPhasesPage/CreatingPhasesPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/user/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/user/Login.vue')
    },
    {
      path: '/product/:id',
      name: 'details',
      component: () => import('./components/DetailsPage/Details.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/Cart/Cart.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/ProfilePage/Profile.vue')
    }
  ]
})
