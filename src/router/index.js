import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes as app } from '../pages'

Vue.use(Router)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
const routes = [...app]

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

/**
* Before a route is resolved we check for
* the token if the route is marked as
* requireAuth.
*/
router.beforeEach(beforeEach)

export default router
