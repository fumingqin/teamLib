// 引用模板代码
const Interface = {
	
	address:{
		// 公众号
		// #ifdef H5
			Url : 'http://zntc.145u.net', //综合出行
		// #endif
		// 小程序/APP
		// #ifndef H5
			Url : 'https://zntc.145u.net:9099', //综合出行
		// #endif
		Url2:'http://sbjg.ipin8.com',//设备监管
	},
	
	system:{
		appName:'智慧龙洲', //仅用于登录
		// #ifdef H5
			openidtype:'公众号',
		// #endif
		// #ifdef MP-WEIXIN
			openidtype:'小程序',
		// #endif
		// #ifdef APP-PLUS
			openidtype:'APP',
		// #endif
		
		applyName:'南平综合出行',//全局图片接口应用类型，用于请求全局图片使用
		imageApplicationType:'XCX',//全局图片接口应用类型，用于请求全局图片使用
			
	}
}

const appConfig={  //AppId,AppSecret配置
	H5Config:{
		name:'公众号的Appid和App秘钥',
		H5AppId:'wxe66c4efb27d8ae38',
		H5AppSecret:'3c1d7f83dde3ce7c5dc4ca9a6a7d141c',
	},
	local:{
		url:'http://zntc.145u.net/h5_sbjg/#/pages/GRZX/personalCenter',
		name:'公众号请求地址',
	},
}

// 接口声明区
export default {
	Interface,
	appConfig
}
