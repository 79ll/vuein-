import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Text from '../views/Text.vue'
import view from '../views/view.vue'
import zhuce from '../views/zhuce.vue'
import houtai from '../views/houtai.vue'
import add from '../views/add.vue'
import denglu from '../views/dengluview.vue'
import buy from '../views/bug.vue'
import afterbuy from '../views/afterbuy.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
	redirect:'/Home',
    
  },
  {
	path:'/buy',
	name:'buy',
	component:buy
  },
  {
  	path:'/afterbuy',
  	name:'afterbuy',
  	component:afterbuy
  },
  {
	  path:'/houtai',
	  name: 'houtai', 
	  children:[
		  {
			  path:'add',
			  name:'add',
			  component:add,
			  
		  },
		  {
		    path: 'about',
		    name: 'about',
		    component:  About
		  },
	  ],
	  component:houtai,
	 
  },
  {
    path: '/Home',
    name: 'home',
  
    component: Home
  },
  {
	  path: '/zhuce',
	  name: 'zhuce',
	  component:zhuce
  },
  {
	  path:'/denglu',
	  name:'denglu',
	  component:denglu
  },
  {
	  path:'/view',
	  name:'view',
	  component: view
  }
]

const router = new VueRouter({
  routes
})

export default router
