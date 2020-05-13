import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import  Velocity from 'velocity-animate'
import {TweenMax} from 'gsap'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
Vue.config.productionTip = false
axios.defaults.baseURL='/api';
Vue.prototype.$axios = axios ;
Vue.prototype.$TweenMax = TweenMax ;
Vue.use(ElementUI);
const originalPush = Router.prototype.push;
var remove=function(array,val){
	let index=-1
	for (let i = 0; i < array.length; i++) {
	if (array[i].id == val)
	{ index=i
	}
	} 
	array.splice(index, 1); 
};

Vue.prototype.$Romove = remove;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
	data:{username:'用户',
			mylist:[],
			all:0
			
	},
	computed:{
	itemindex(){
		let index=[]
		for(let item of this.mylist)
		{console.log(item.id)
			index.push(item.id)
		}
		return index.toString()
	},
	itemsrc(){
		let src=[]
		for(let item of this.mylist)
		{console.log(item.src1)
			src.push(item.src1)
		}
		return src.toString()
	},
	itemnum(){
		let src=[]
		for(let item of this.mylist)
		{
			src.push(item.buynum)
		}
		return src.toString()
	},
	itemname(){
		let src=[]
		for(let item of this.mylist)
		{console.log(item.name)
			src.push(item.name)
		}
		return src.toString()
	},
	itemall(){
		let src=[]
		for(let item of this.mylist)
		{
			src.push(item.buynum*item.price)
		}
		return src.toString()
	}
	},
	
	methods:{
		computeall(){
			this.all=0
		for(let item of this.mylist){
			this.all+=item.buynum*item.price
		}
		}
	},
  router,
  store,
  render: h => h(App)
}).$mount('#app')

