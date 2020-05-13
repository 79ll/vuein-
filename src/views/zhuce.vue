<template>


<el-card id="zhucebackground"
		v-loading="loading"
		element-loading-text="注册中">
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
		<el-form-item label="确认密码" prop="nextmima">
			<el-input laceholder="请输入密码"
			v-model.trim="yonghu.nextmima"
			type="password"
			show-password>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="zhuce('yonghu')" >注册</el-button>
		</el-form-item>
	</el-form>
	</el-card>

	
</template>

<script>
	export default{
		name:'zhuce',
		data(){
			var Isexist=(rule,value,callback)=>{
				this.$axios({
					methods:'get',
					url:'/zhuce',
					params:{
						type:'yanzheng',
						username:value,
					},
					
				}).then((data)=>{
				if(data.data=='√')
				callback();
				else
				callback(new Error("账号已经存在"));
					
				}).catch((error)=>{
					callback(new Error("网络未间接"))
					console.log(error);
				})
			};
			return{
				yonghu:{	zhanghao:'',
				mima:'',
				nextmima:''},
				loading:false,
				rules:{
					zhanghao:[{required:true,message:'账号不能为空',trigger:'blur'},
								{validator:Isexist,trigger:'blur'},
								{type:"string",whitespace:true,trigger:'blur'}],
					mima:[{required:true,message:'密码不能为空',trigger:'blur'},
					{min:5,max:16,message:'密码长度应该5到16之间',trigger:'blur'},],
					nextmima:[{
						required:true,message:'密码不能为空',trigger:'blur'
					}]
				}
				
			
			};
		},
	
	
		computed:{
			isReady:function(){
				if(this.YesNo=='√'&&this.mima!=''&&this.mima==this.nextmami)
				return 'isready';
				else
				return 'noready';	
			}
		},
		methods:{
			zhuce(formname){
				this.$refs[formname].validate((valid)=>{
					if(valid==true)
					{this.loading=true;
						this.$axios({
							methods:'get',
							url:'/zhuce',
							params:{
								type:'zhuce',
								username:this.yonghu.zhanghao,
								pass: this.yonghu.mima
							},
							
						}).then((data)=>{
							console.log(data.data);
							this.loading=false
							this.$message({
								message:"注册成功",
								type:'success'
							})
							
						}).catch((error)=>{
							this.loading=false
							console.log(error);
							this.$message.error("注册失败,可能是网络不行，请稍后再试");
						})
					}
				})
			
			}	
	}
		
		
	}
</script>

<style>
	#isready{
		padding: 10px;
		color: #F0F8FF;
		background-color: #FFAA00;
		width: 19.366312rem;
		position: absolute;
		bottom: -5.325rem;
		left: -3.25rem;
		 border-radius: 25px;
	}
	#noready{
		padding: 10px;
		color:#888888;
		background-color:#c6bcb4;
		width: 19.366312rem;
		position: absolute;
		bottom: -5.325rem;
		left: -3.25rem;
		 border-radius: 25px;
	}
	#zhucebackground{
		width: 30%;
	
		height: 70%;


	position: absolute;
	left: 30.5rem;
	top: 15rem;
	}
	#zhucebacktext *{
		display: block;
		padding: 0.625rem;
	}
	#zhucebacktext
	{position: absolute;
			left: 5.5rem;
			
		 	
	}
</style>
