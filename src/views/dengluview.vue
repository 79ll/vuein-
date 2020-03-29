<template>
	<el-card id="zhucebackground"
			v-loading="loading"
			element-loading-text="登录中">
			<el-form :model="yonghu" status-icon >
			<el-form-item >
			<h1>注册</h1>
			</el-form-item >
			<el-form-item label="输入账号" >
			<el-input
			  placeholder="请输入账号"
			  v-model.trim="yonghu.zhanghao"
			  clearable>
			</el-input>
			</el-form-item>
			<el-form-item label="密码" >
				<el-input laceholder="请输入密码"
				v-model.trim="yonghu.mima"
				type="password"
				show-password>
				</el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="denglu()" >登录</el-button>
			</el-form-item>
		</el-form>
		</el-card>
</template>

<script>
	export default{
		name:'denglu',
		data(){
			return{
				yonghu:{
					zhanghao:'',
					mima:'',
					
				},
				loading:false
			}
			
			
		},
		methods:{
			denglu(){
				this.loading=true
				this.$axios({
					methos:"get",
					url:'/zhuce',
					params:{
						type:'denglu',
						zhanghao:this.yonghu.zhanghao,
						mima:this.yonghu.mima
					},
					}).then((data)=>{
						
						if(data.data=="Yes")
						{this.$message({
							message:"登录成功",
							type:'success'
						})
						this.loading=false;
						this.$router.push('/Home')
						}
						else{	this.loading=false;
							console.log(data);
							this.$message({
								message:"账户或者密码错误",
								type:'warning'
							})
						}
					}).catch((error)=>{
							this.loading=false;
						this.$message.error(
						"登录失败"
									)
					})
				
			}
		}
	}
</script>

<style>
</style>
