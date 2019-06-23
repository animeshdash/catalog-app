// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { Model } from 'vue-api-query'
// import loginChecker from './lib/loginChecker'
import { PaginationNav } from 'bootstrap-vue/es/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)

Vue.use(PaginationNav)

// inject global axios instance as http client to Model
Model.$http = axios
Vue.config.productionTip = true

/* eslint-disable no-new */
// router.beforeEach(loginChecker)

new Vue({
  router,
  store,
  Model,
  render: h => h(App)
}).$mount('#app')
