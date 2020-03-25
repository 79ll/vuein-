<template>

	<router-link :to="{path:'/view'}" tag="div" id="div">
		<el-card :body-style="{ padding: '0px',height: '20rem',
		width: '15rem'}" id="card">
		<img :src="'/img/'+img1" />
		<div id="money">{{money}}</div>
		<div id="name">{{name}}</div>
		</el-card>
	</router-link>	
	
</template>

<script>
	export default{
		name:'shangpingrow',
		props:['all'],
		data(){
			return {
				img1:this.all.img,
				money: this.all.money,
				name:this.all.name
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#money{
		font-family: "agency fb";
		font-weight:bold;
		font-size: 0.625rem;
		color: red;
	}
	#name{
		
	}
	#div{
	
		float: left;
		
	}
	#card{
		height: 20rem;
		width: 15rem;
	}
	img{
	width: 100%;
	height: 70%;
	
	}
</style>
