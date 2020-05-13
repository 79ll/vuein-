<template>
	<div id="shangpingview">
	<item v-for="(item,index) in all" :all="item" :key="index" @click="go(item)"/>
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
				find:this.$route.query.que,
				all:[
					
				],
				
			}
		},
		components:{
			item
		},
		mounted(){
			this.$axios({
				methods:'get',
				url:'/getitem',
				params:{
					type:'getitem',
					find:this.find,
					current:1
				}
			}).then((data)=>{
				this.all=data.data
				console.log(this.all)
			})
	
		},
	methods:{
		clickchang(current){
			this.$axios({
				methods:'get',
				url:'/getitem',
				params:{
					type:'getitem',
					find:this.$route.query.que,
					current:current
				}
			}).then((data)=>{
				this.all=data
				console.log(data)
			})
		},
		go(item){
			this.$router.push({path:'/view',query:{
				que:item
			}})
			console.log(item)
		}
	}
		
	}
</script>

<style scoped>
	#shangpingview{
		width: 100%;
		height: 100%;
	}
	#pag{
		position: absolute; 
		bottom: 0rem;
		right: 0rem;
	}
</style>