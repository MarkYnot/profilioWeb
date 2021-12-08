import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import VueLazyload from 'vue-lazyload'
import Antd from 'ant-design-vue';
import md5 from 'js-md5';
// import VueClamp from 'vue-simple-clamp';
import  VueCookies from 'vue-cookies';
import './plugins/element.js'
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
import ElementUI from 'element-ui'
import { Dialog, Table, TableColumn, MessageBox } from 'element-ui'

Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueClamp);
Vue.use(vueMiniPlayer)
Vue.use(VueCookies);
Vue.use(Antd);
Vue.use(VueLazyload);
Vue.prototype.$md5 = md5
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
