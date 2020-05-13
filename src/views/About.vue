<template>
	<div>
用户名
	<el-table
	:data="list"
	border=true
	height="85%"
	style="width: 100%;">
	<el-table-column
	prop="id"
	label="id"
	width="250">
	</el-table-column>
	<el-table-column
	prop="name"
	label="name"
	width="250">
	<template v-slot:default="slotProps">
	<router-link :to="{path:'/buy',query:{que:slotProps.row.id}}"><a>{{slotProps.row.name}}</a></router-link>
	</template>
	</el-table-column>
	<el-table-column
	prop="all"
	label="all"
	width="250">
	</el-table-column>
		</el-table>
	</div>
</template>
<script>
export default{
	name:'userabout',
	data(){
		return{
			list:[]
		}
	},
	aftermounted() {
		if(this.$root.username == '用户')
		{this.$router.push('/denglu')}
		
	},
	mounted(){
		this.$axios({
			method:'get',
			url:'/getbuy'
		}).then(r=>{
			console.log(r);
			r.data.shift();
			console.log(r);
			this.list=r.data;
			console.log(this.list);
		})
	}
}
</script>
<style>
	#class{
		background-color: #0055ff;
		hight: 6.25rem;
		overflow: hidden;
		
	}
</style>
