import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router'

Vue.config.productionTip = false

// 在全局配置 axios
// axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.baseURL = 'http://www.kkkarlooo.cn:80/'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.$http = axios

// 全局引用外部css
import '@/assets/css/base.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
