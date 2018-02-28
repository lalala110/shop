// 路由入口的文件 
import Vue from 'vue'
// 基于vue的插件
import VueRouter from 'vue-router'
import Login from "../component/login/Login.vue"
import Register from "../component/register/Register.vue"
Vue.use(VueRouter)
  export default new VueRouter({
   routes:[
        {name:'login',path:"/login",component:Login},
        {name:"register",path:"/register",component:Register}
    ]
})
