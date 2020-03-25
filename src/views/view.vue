<template>
	<div id="shangpingview">
	<item v-for="(item,index) in all" :all="item" :key="index"/>
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
				]
			}
		},
		components:{
			item
		}
	}
</script>

<style>
</style>