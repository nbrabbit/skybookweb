import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue'

import Index from "./views/Index.vue";
import Login from "./views/admin/login.vue";
import SBAdmin from "./views/admin/sbadmin.vue";
import SBAdd from "./views/admin/admin/sbadd.vue";
import SBList from "./views/admin/admin/sblist.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/sbadmin",
      name: "sbadmin",
      component: SBAdmin,
      children: [
        {
          path: "sbadd",
          name: "sbadd",
          component: SBAdd
        },
        {
          path: "sblist",
          name: "sblist",
          component: SBList
        }
      ]
    }
  ]
});
