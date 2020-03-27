<template>
	<el-card id="zhucebackground">
			<el-form :model="yonghu" status-icon :rules="rules" ref="yonghu">
			<el-form-item >
			<h1>注册</h1>
			</el-form-item >
			<el-form-item label="输入账号" prop="zhanghao">
			<el-input
			  placeholder="请输入账号"
			  v-model.trim="yonghu.zhanghao"
			  clearable>
			</el-input>
			</el-form-item>
			<el-form-item label="密码" prop="mima">
				<el-input laceholder="请输入密码"
				v-model.trim="yonghu.mima"
				type="password"
				show-password>
				</el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="zhuce('yonghu')" >登录</el-button>
			</el-form-item>
		</el-form>
		</el-card>
</template>

<script>
	export default{
		name:'denglu',
		data(){
			
		}
	}
</script>

<style>
</style>
