
<template>
  <div id="app">
	  <el-row id="top">
		  <el-col :span="5"><span>欢迎来到购物网站</span></el-col>
		  <el-col :span="11"><div class="grid-content">  </div></el-col>
		  <el-col :span="8"><camport></camport></el-col>
	  </el-row>
	  <el-row>
		  <el-col :span="6"><h2>购物网站</h2></el-col>
		  <el-col :span="12">
			  
			  <sou></sou>
		  </el-col>
		  <el-col :span="6">
			 <div class="grid-content"> </div> 
		  </el-col>
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
import sou from './components/sou.vue'
import camport from './components/Top.vue'
export default{
	name:'APP',
	data(){
		return {id:'zhangsan'
			
		}
	},
	components:{
		sou,
		caidang,
		camport
	}
}
</script>
<style >
	 .el-select .el-input {
	    width: 130px;
	  }
	  .input-with-select .el-input-group__prepend {
	    background-color: #fff;
	  }

html,body{
margin: 0;
padding: 0;
height: 100%;
}
#top{
	height: 5%;
	margin-top: 10px;
}
a{
	text-decoration: none;
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
.grid-content{
min-height: 1px;
}
</style>
