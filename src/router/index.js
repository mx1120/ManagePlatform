import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
const login = resolve => {
	require(['components/Login'], resolve)
}

Vue.use(Router)

let subRoutes = require('./routesMaker').default

function getRoute(routes) {
	let result = []
	for(let route of routes) {
		if(['/login', '/home', '/project'].includes(route.path)) {
			/*不做为layout主体*/
		}else {
			if(Array.isArray(route)){
				for(let sub_route of getRoute(route)) {
					sub_route.path = route.path + '/' + sub_route.path
					result.push(sub_route)
				}
			}else {
				result.push(route)
			}
		}
	}
	return result
}

let routes = [
	{
		name: 'login',
		path: '/login',
		component: login
	},
	{
		name: 'layout',
		path: '/',
		component: layout,
		children:getRoute(subRoutes)
	}
]

export default new Router({
	mode: 'history',
    routes: routes
})
