import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Index from "./views/Index.vue"
import Login from "./views/admin/login.vue"

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})
