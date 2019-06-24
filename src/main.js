// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
require('swiper/dist/css/swiper.css')
// Axios.defaults.baseURL = 'http://www.wwtliu.com'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios=Axios

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
// axios.interceptors.request.use(function (e) {
//
// })
// axios.interceptors.response.use(function (e) {
//
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
