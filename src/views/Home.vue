<template>
  <div class="home">
<el-row >

	<el-col :span="16">
	<lunbo></lunbo>
	</el-col>
	<el-col :span="8"><denglu></denglu></el-col>

</el-row>
<div>销量前四</div>
	<div v-for="(item,index) in list" :key="index"><item :all="item" :key="index"></item><span>{{item.sale}}</span></div>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import lunbo from '../components/lunbo.vue'
import denglu from '../components/denglu.vue'
import  item from '../components/shangpingrow.vue'
export default {
  name: 'home',
  data(){
	  return{
		list:[]  
	  }
  },
  components: {
  denglu,
 lunbo,
 item

  },
  mounted() {
  	this.$axios(
	{
		methods:'get',
		url:'/order',
		
	}
	).then(r=>{
		this.list=r.data
	})
  }
  
}
</script>
<style scoped>
	.class{
		
		height :100%
	}
	div{
		min-height: 1px;
	}
	.home{
		width: 100%;
	}
</style>

