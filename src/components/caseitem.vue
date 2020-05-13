<template>
	<el-card :body-style="{ padding: '0px',height: '100%',
	width: '100%'}" id="card">
	<div ><span id="name">{{itemdata.name}}</span>
	<el-button style="float: right; padding: 3px 0" type="text" @click="remove">删除</el-button></div>
	<img :src="'/img/'+itemdata.src1" />
	<div id="money">{{itemdata.price}}</div>
	
	<div>{{itemdata.username}}</div>
		<el-input-number v-model="num" :min="1" :max="itemdata.num" @change="handleChange" label="购买数目" ></el-input-number>
	</el-card>
</template>

<script>
	export default{
		name:"caseitem",
		props:["itemdata"],
		data(){
			return {
				num:1
			}
		},
		methods:{
			handleChange(value){
				this.itemdata.buynum=value;
			this.$root.computeall();
			},
			remove(){console.log(this.itemdata.id)
				this.$Romove(this.$root.mylist,this.itemdata.id)
				console.log(this.itemdata.id);
				this.$root.computeall();
			}
		}
	}
</script>

<style>
	#name {
	font-family:  "Arial","Microsoft YaHei","黑体","宋体";	
	font-size: 30px;
	}
</style>
