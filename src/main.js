// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLodash from 'vue-lodash'
import loadsh from 'lodash'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Globals from './plugins/global'

Vue.config.productionTip = false
Vue.use(Globals, router)

Vue.use(vueLodash, loadsh)
Vue.use(elementUi)
//finally方法扩展
Promise.prototype.finally = function (call) {
	let Pro = this.constructor
	return this.then(
		suc => Pro.resolve(call()).then(() => suc),
		resson => Pro.reject(call()).then(() => {throw resson})
	)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
