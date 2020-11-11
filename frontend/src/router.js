import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/index.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/admin/index.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/user/index.vue')
  },
  {
    path: '/expert',
    name: 'Expert',
    component: () => import('@/admin/expert.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/admin/project.vue')
  }
]
const router = new VueRouter({
  routes
})

export default router
