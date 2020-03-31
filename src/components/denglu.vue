<template>
	<div>
		<el-card id="card">
		<el-form id="el-form" v-if="witch">
		<el-form-item  id="avatar"><el-avatar icon="el-icon-user-solid" :size='80' :src="squareUrl"> </el-avatar></el-form-item>
		<el-form-item>
		<router-link tag="div" to="/denglu"><el-button type="primary">登录</el-button></router-link>	
		</el-form-item >
		<el-form-item>
		<router-link tag="div" to="/zhuce"><el-button type="primary">注册</el-button></router-link>
	
		</el-form-item >
		</el-form>
		<el-form id="el-form" v-if="!witch">
		<el-form-item  id="avatar"><el-avatar icon="el-icon-user-solid" :size='80' :src="squareUrl"> </el-avatar></el-form-item>
		<el-form-item>
        <h1>{{name}}</h1>
		</el-form-item >
		<el-form-item>
		<h1 @click="sendname">欢迎回来</h1>
		</el-form-item >
		</el-form>
		</el-card>
	</div>
</template>

<script>
export default{
	name:'denglu',
	data(){
		return{
			squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
		}
	},
	computed:{
		witch(){
			return (name=='用户'||name=='')
		}
	},
	methods:{
		sendname(){
			console.log(name)
		}
	},
	inject:['name']
}
</script>

<style scoped>
	div{
	width: 100%;
	}
	
	#el-form *{
		text-align: center;
	}
	#el-form {
		text-align: center;
	}
	#card{
		
		height: 30rem;;
	}
</style>
