<template>
	<div>
	<router-link :to="{path:'/houtai',query:{index:2}}">
	<el-link icon="el-icon-user">{{yonghu}}</el-link>
	</router-link>
	<router-link to="/view">
	<el-link icon="el-icon-s-shop">商品</el-link>
	</router-link>
	<el-badge value="12">
	<router-link to="/view">
	<el-link icon="el-icon-bell">信息</el-link>
	</router-link>
	</el-badge>
	</div>
</template>

<script>
	export default{
		name:"Top",
		data(){
			return{
			yonghu:'用户',
				}
		}
		
	}
</script>

<style scoped>
	.el-link{
		font-size: 16px;
	}
	div *{
		margin-left: 2px;
	}
</style>
