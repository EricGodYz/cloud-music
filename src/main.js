import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont.css'
import Plugin from './plugin'

Vue.config.productionTip = false

// 全局通用插件的使用，在全局进行引入
Vue.use(Plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
