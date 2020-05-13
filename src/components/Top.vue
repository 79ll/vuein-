<template>
	<div>
	<router-link :to="{path:'/houtai/about',query:{index:1}}"  @click.native="issign()">
	<el-link icon="el-icon-user">{{username}}</el-link>
	</router-link>
	<router-link :to="{path:'/houtai/add',query:{index:2}}"  @click.native="issign()">
	<el-link icon="el-icon-s-shop">商品</el-link>
	</router-link>
	<el-badge value="12">
	<router-link :to="{path:'/houtai',query:{index:3}}"  @click.native="issign()">
	<el-link icon="el-icon-bell">信息</el-link>
	</router-link>
	</el-badge>
	</div>
</template>

<script>
	export default{
		name:"Top",
		computed:{
			username(){
				return this.$root.$data.username
			}
		},
		methods:{
			issign(data){
				this.$axios({
					methods:'get',
					url:'/getitem',
					params:{
						type:"issign"
					}
				}).then((data)=>{
					if(data.data=="")
					{	this.$message("尚未登录")
						this.$router.push('/denglu')
					}
					else{
						
						console.log(data.data);
						
					}
				})
				
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
