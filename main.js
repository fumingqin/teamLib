import Vue from 'vue'
import App from './App'
import lyfw from 'common/Lyfw.js' //旅游服务

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

//模拟异步请求数据 - 旅游服务
const Lyfw = type=>{
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(lyfw[type]);
		}, 500)
	})
}

Vue.prototype.$api = {lyfw};
app.$mount()
