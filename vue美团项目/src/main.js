import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/element.js'
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// 全局组件都可以使用
Vue.directive('document-click',{
    bind(el, binding, vnode) {
      // 绑定的时候会调用一次。。
      document.addEventListener("click",binding.value)
    },
    inserted() {
      // 插入到父节点时调用
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

