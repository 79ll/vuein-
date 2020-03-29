<template>
	
		<div id="router">
	
			
			<div class="router-text" ref="router">
				<router-link to="/Home" tag="div" @mouseenter.native="add(0)"  @mouseout.native="remove(0)" >首页</router-link>
				<router-link :to="{path:'/view',query:{que:'衣服'}}" tag="div" @mouseout.native="remove(1)" @mouseenter.native="add(1)" > 衣服</router-link>
				<router-link :to="{path:'/view',query:{que:'电器'}}" tag="div" @mouseout.native="remove(2)" @mouseenter.native="add(2)"> 电器</router-link>
				<router-link :to="{path:'/view',query:{que:'家具'}}" tag="div" @mouseout.native="remove(3)" @mouseenter.native="add(3)"> 家具</router-link>
				<router-link :to="{path:'/view',query:{que:'食品'}}" tag="div" @mouseout.native="remove(4)" @mouseenter.native="add(4)"> 食品</router-link>
				
			</div>
			<thetext ref='text' id="thetext" ></thetext>
			
		</div>
	
</template>

<script>

	import thetext from './thetext.vue'

	
	export default{
		name:'caidang',
		components:{
			thetext,
	
			
		
		},
		methods:{
			remove(n){
			this.$refs.text.htmldisplay(n);
			this.$refs.router.children[n].style.borderTopColor='#ff9900'
			},
			add(n){
			this.$refs.text.htmladd(n);
			this.$refs.router.children[n].style.borderTopColor='white'
			}
			
		}
		
		
	}
</script>

<style>
	.router-text:after{
	
	            content:".";
	            display: block;
	            height: 0;
	            clear: both;
	            visibility: hidden;
	}
	.router-text div{
		border-top-style:solid;
		border-top-color: #ff9900;
		border-top-width: 5px;
		padding: 10px 10px 10px 10px;
		border-radius: inherit;
		float: left;
		box-shadow: #888888;
		background-color: #ff9900;
		position: relative;
		left: 100px;
	}
	#thetext{
		position: absolute;
		top: 45px;
		left: 180px;
		
		z-index: 100;
		background-Color:white
		
	}
	.router-text{
		background-color: #ff9900;
		min-height: 20px;
		
		clear: both;
		padding-left: 100px;
	
	}


</style>
