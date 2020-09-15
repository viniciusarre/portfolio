export { default as MobileNavBar } from '../../components/MobileNavBar.vue'
export { default as NavBar } from '../../components/NavBar.vue'

export const LazyMobileNavBar = import('../../components/MobileNavBar.vue' /* webpackChunkName: "components/MobileNavBar'}" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar'}" */).then(c => c.default || c)
