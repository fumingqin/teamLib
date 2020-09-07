import Vue from 'vue'
import App from './App'
import lyfw from 'common/Lyfw.js' //旅游服务
import GrzxInter from 'common/Grzx.js' //个人中心
import ChangeImage from 'common/changeImage.js' //更换图片

import oSit from 'common/overallSituation.js' //全局js文件

Vue.config.productionTip = false

Vue.prototype.$GrzxInter=GrzxInter;  //个人中心
Vue.prototype.$ChangeImage=ChangeImage; //更换图片
Vue.prototype.$oSit=oSit;  //全局文件

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
