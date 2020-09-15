import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _146527ec = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _008b7025 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _a7d3cc86 = () => interopDefault(import('../pages/experience.vue' /* webpackChunkName: "pages/experience" */))
const _73f76d3b = () => interopDefault(import('../pages/open-source.vue' /* webpackChunkName: "pages/open-source" */))
const _158546cf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _146527ec,
    name: "about"
  }, {
    path: "/education",
    component: _008b7025,
    name: "education"
  }, {
    path: "/experience",
    component: _a7d3cc86,
    name: "experience"
  }, {
    path: "/open-source",
    component: _73f76d3b,
    name: "open-source"
  }, {
    path: "/",
    component: _158546cf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
