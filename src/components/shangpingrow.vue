<template>

	<router-link :to="{path:'/buy',query:{que:id}}" tag="div" id="div" @click="clickall">
		<el-card :body-style="{ padding: '0px',height: '100%',
		width: '100%'}" id="card">
		<img :src="'/img/'+img1" />
		<div id="money">{{money}}</div>
		<div id="name">{{name}}</div>
		<div>{{master}}</div>
		<div>{{num}}</div>
		</el-card>
	</router-link>	
	
</template>

<script>
	export default{
		name:'shangpingrow',
		props:["all"],
		data(){
			return {
				id:this.all.id,
				img1:this.all.src1,
				money: this.all.price,
				name:this.all.name,
				master:this.all.username,
				num:this.all.num
			}
		},
		mounted(){
			console.log(this.all)
		},
		methods:{
			clickall(){
			console.log(this.$route.query.que)
						}
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
		height: 20rem;
		width: 25%;
		float: left;
		
	}
	#card{
		height: 100%;
		width: 100%;
	}
	#card:hover{
		transition: transform .2s;
		transform: scale(1.05,1.05) ;
	}
	img{
	width: 100%;
	height: 70%;
	max-width: 100%;
	}
	
</style>
