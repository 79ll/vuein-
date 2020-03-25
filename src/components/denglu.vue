<template>
	<div>
		<el-card id="card">
		<el-form id="el-form">
		<el-form-item  id="avatar"><el-avatar icon="el-icon-user-solid" :size='80' :src="squareUrl"> </el-avatar></el-form-item>
		<el-form-item>
		<el-button type="primary">登录</el-button>
		<el-form-item>
		<router-link tag="div" to="/zhuce"><el-button type="primary">注册</el-button></router-link>
		</el-form-item >
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
	}
}
</script>

<style scoped>
	div{
	
	}
	
	#el-form *{
		text-align: center;
	}
	#el-form {
		text-align: center;
	}
	#card{
		width: 20rem;
		height: 30rem;;
	}
</style>
