
<template>
  <div id="app">
	  <el-row>
		  <el-col :span="5"><span>欢迎来到购物网站</span></el-col>
		  <el-col :span="11"><div class="grid-content">  </div></el-col>
		  <el-col :span="8"><span>用户名/商品/信息</span></el-col>
	  </el-row>
	  <el-row>
		  <el-col :span="6"><h2>购物网站</h2></el-col>
		  <el-col :span="18"><div class="grid-content"> </div></el-col>
	  </el-row>
	<el-row>
			
			  <el-col :span="24"><caidang id="caidang"></caidang></el-col>
			   
	</el-row>

	
		


		
	<el-row id="viewrouter">
			<el-col :span="3"><div class="grid-content"> </div></el-col>
			
		<el-col :span="21" id="viewcol">
	<div id="view">
	<router-view :key="$route.query.que"></router-view>
	</div>
	</el-col>
	<el-col :span="2"><div class="grid-content"> </div></el-col>
	</el-row>
  </div>
</template>
<script>
import lunbo from './components/lunbotext.vue'
import caidang from './components/caidang.vue'
import denglu from './components/denglu.vue'
export default{
	name:'APP',
	data(){
		return {id:'zhangsan'
			
		}
	},
	components:{
	
		caidang
	}
}
</script>
<style>
body{
margin: 0;
padding: 0;
}
a{
	text-decoration: none;
}
#denglu{
	position: absolute;
	padding: 10px;
}
#nav{

	display: inline-block;
	width:100%;
	height: 20%;
	
	}
	#router *{
		float: left;
	}
.router{
display: block;
padding: 0.625rem;
color: aliceblue;
}
.see{

	position: absolute;
	top: 4.7125rem;
	display: block;
	clear: both;
	padding: 0.625rem;
}
#view{
position:relative;
border-left-width: 0.125rem;
border-left-color: #dcdfe6;
border-left-style: solid;
background-color: white;
	height: 100%;
	width: 80%;
	
	
}
#view::after{
	clear: both;
}
#viewcol{
	height: 100%;
}
#viewrouter{
	height: 100%;
	background-image: url('/img/background.jpg');
}

#app{
	position:relative;
	height: 100%;
	width: 100%;
	
	
}
html,body { height: 100%; 
}
#caidang{
	
}
.grid-content{
min-height: 1px;
}
</style>
