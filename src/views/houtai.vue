<template>
	<div>
<el-container>
	<el-aside width="20%">
		<el-menu 
		:default-active="$route.path"   
		router>
			<el-menu-item index="/denglu">用户信息</el-menu-item>
			<el-menu-item index="/houtai/add">商品管理</el-menu-item>
			<el-menu-item index="/view">信息</el-menu-item>
		</el-menu>
	</el-aside>
	<el-main width="80%"><router-view></router-view></el-main>
</el-container>
</div>
</template>

<script>
	export default{
		name:'houtai',
		data(){
			return{
				
			}
		},
		computed:{
			path(){
				return{
				
				}
			}
		}
	}
</script>

<style scoped>
	.el-aside{

		height: 100%;
	}
	.el-main{
		padding: 0;
	}
	div{
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.el-container{
		height: 100%;
	}
	img{
		height: 100px;
		width: auto;
	}
</style>
