import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from "./component/App.vue"
import vueRouter from "./router"

import axios from "axios"//只能在当前模块上面
//花括号
// import api,{domain} from "./js/api_config"
// axios.get(domain+api.logout).then(()=>{
//     console.log("登出")
// })
import api,{damain} from "./js/api_config"

 Vue.use(ElementUI)

 axios.get(domian+api.logout).then(()=>{
     console.log(123456)
 })
// 配置默认域名, 这样请求的时候就不用在url里加域名了

axios.defaults.baseURL=damain;
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
// axios.defaults.withCredentials=true;
axios.defaults.withCredentials=true;
// 将axios,api添加到vue的原型当中
Vue.prototype.$axios=axios;
Vue.prototype.$api=api;
new Vue({
    el:"#app",
    render:createElement=>createElement(App),
    router:vueRouter
})