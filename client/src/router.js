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
      component: CategoriesPage
    },
    {
      path: '/product/create',
      component: () => import('./components/ProductCreatingPhasesPage/CreatingPhasesPage.vue')
    },
    {
      path: '/register',
      component: () => import('./components/user/Register.vue')
    },
    {
      path: '/login',
      component: () => import('./components/user/Login.vue')
    },
    {
      path: '/product/:id',
      name: 'details',
      component: () => import('./components/DetailsPage/Details.vue')
    },
    {
      path: '/cart',
      component: () => import('./components/Cart/Cart.vue')
    }
  ]
})
