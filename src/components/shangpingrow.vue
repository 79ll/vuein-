<template>

	<router-link :to="{path:'/view'}" tag="div" id="div">
		<el-card :body-style="{ padding: '0px',height: '100%',
		width: '100%'}" id="card">
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
				name:this.all.name,
				master:this.all.master,
				num:this.all.num
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
		width: 20rem;
	}
	#card:hover{
		transition: transform .2s;
		transform: scale(1.05,1.05) ;
	}
	img{
	width: auto;
	height: 70%;
	max-width: 100%;
	}
	
</style>
