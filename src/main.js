import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);
// Vue.http.options.emulateJSON = false

/**
 * 路由守卫，必须放在new Vue前
 */
router.beforeEach((to, from, next) => {
	//
	if (localStorage.getItem('loginUser') != null) {
		//如果已经登录，直接跳转到目标页面

		next();
	} else {
		//如果未登录，跳转至登录页面

		if (to.path === '/login') {
			next();
		} else {
			next('/login');
		}
	}

})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
