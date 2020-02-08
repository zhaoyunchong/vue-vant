import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'
// 全部引入vant
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)
Vue.config.productionTip = false
import { Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Button)
  .use(Icon)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
