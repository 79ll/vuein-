<template>
	<div id="lunbo">
	<el-carousel  height="30rem">
	    <el-carousel-item v-for="item in picturelist" :key="item">
	<router-link to="/view" >
		<el-image :src="'/img/'+item"
				fit="cover"
				id="img"></el-image>
	</router-link>
	    </el-carousel-item>
	  </el-carousel>
	</div>
	
</template>

<script>

	import  Velocity from 'velocity-animate'
 export default{
		name :'lunbo',
		data(){
			return {
				index : 0,
				picturelist : ['下載.jpg','f255d5008585c7be1b28aad08d3272fe.jpg',"222002511.jpeg",'u=1452084672,2791892417&fm=26&gp=0.jpg','下載 (1).jpg','下載 (2).jpg']
					};
				},
		
	}
</script>

<style scoped>
	#lunbo{
		height: 30rem;
		border-width: 0.0625rem;
		 border-style: solid;
		 border-color: #dcdfe6;
	}
	#img{
		height: 30rem;
	}
</style>
