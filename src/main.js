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

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

//路由守卫
router.beforeEach((to, from, next) => {
	// 	console.log("拦截");
	// 	if (localStorage.getItem('loginUser') != null) {
	// 		next("/login");
	// 	} else {
	// 		next("/login");
	// 	}
	
	if(to.path.startsWith("/login")){
		next();
	}else{
		let user = localStorage.getItem('loginUser');
		if(!user){
			next({
				path:'/login'
			})
		}else{
			next();
		}
	}
})
