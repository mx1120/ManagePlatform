/**
 * Created by Administrator on 2018/1/26.
 */
import axios from 'axios'

const tools = {
	install:null
}

tools.install = function (Vue, router) {
	Vue.prototype.fetch = axios
	axios.interceptors.request.use(config => {
		console.info(config)
		if (config.url.startsWith('/api')){
			let token = localStorage.getItem('Tbkt-Token') || ''
			config.headers['Tbkt-Token'] = token
			config.url = config.url.replace('/api', 'http://192.168.7.112:7899')
		}
		return config
	}, error => {
		console.info(error)
		return Promise.reject(error)
	})

	axios.interceptors.response.use(res => {
		console.info(res)
		if(res.data.response == 'fail') {
			console.info('error')
		}else {
			localStorage.setItem('Tbkt-Token', res.data.tbkt_token)
		}
		return res
	}, error => {
		console.info(error)
		return Promise.reject(error)
	})


//全局路由钩子

	router.beforeEach((to, from, next) => {
		if(['/login', '/home', '/project'].includes(to.path)) {
			next()
		}else {
			if(localStorage.getItem('Tbkt-Token') == null) {
				next({name: 'login'})
			}else {
				next()
			}
		}
	})
}

export default tools