/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const View = () => import(/* webpackChunkName: "page1" */ './views/view1.vue')
const Template1 = () => import('template/Template1.vue')

const children = [{
  name: 'page1.view',
  path: 'view',
  component: View
}]

export default [{
  children,
  name: 'page1',
  path: '/page1',
  component: Template1,
  redirect: { name: 'page1.view' },
  meta: { requiresAuth: false }
}]
