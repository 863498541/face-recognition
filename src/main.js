// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './config'
import util from './utils'
import VueResource  from "vue-resource"
Vue.prototype.$configdata=config
Vue.prototype.$util=util

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
