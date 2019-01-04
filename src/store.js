import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: 'false',
    loginUserId:'',
    loginUserName:'',
    loginTime:''
  },
  mutations: {
    login (state , Obj){
      state.isLogin = Obj.isLogin;
      state.loginUserId = Obj.loginUserId;
      state.loginUserName = Obj.loginUserName;
      state.loginTime = Obj.loginTime;
      localStorage.setItem("","");
    }
  },
  actions: {}
});
