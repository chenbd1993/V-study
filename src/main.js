// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css'
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import App from './App'
import router from './router'
import './assets/mui/css/mui.css'
import './assets/mui/css/iconfont.css'
import Vueresourse from 'Vue-resource'
Vue.use(Vueresourse)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
