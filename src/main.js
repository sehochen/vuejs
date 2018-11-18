// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import ckplayer from './assets/ckplayer/ckplayer'
import Config from './config'
import axios from 'axios'


// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.prototype.$http = axios
Vue.prototype.Config = Config.config

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ckplayer)

Vue.use(VueLazyLoad,{
  error:'./static/load.gif',
  loading:'./static/load.gif'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  // render: h => h(App)
})