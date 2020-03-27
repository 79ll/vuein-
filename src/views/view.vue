<template>
	<div id="shangpingview">
	<item v-for="(item,index) in all" :all="item" :key="index"/>
	<el-pagination
	  background
	  layout="prev, pager, next"
	  :total="all.length"
	  :page-size="20"
	  @current-change="clickchang"
	  id="pag">
	</el-pagination>
	</div>
</template>

<script>
	import item from '../components/shangpingrow.vue'
	export default {
		name:'shangpingview',
		data(){
			return{
				all:[
					{img:'0.jpg',
					name:'text1',
					money:3000
					},
					{
					img:'下載.jpg',
					name:'text2',
					money:5000
					},
					{
						img:'下載 (1).jpg',
						name:'text3',
						monry:6000
					}
				],
				
			}
		},
		components:{
			item
		},
		mounted(){
			console.log("route is"+this.$route.query.que)
			
		},
	methods:{
		clickchang(val){
			console.log(val)
		}
	}
		
	}
</script>

<style scoped>
	#shangpingview{
		width: 80%;
	}
	#pag{
		position: absolute; 
		bottom: 0rem;
		right: 0rem;
	}
</style>