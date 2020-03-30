<template>
<div>
	<div id="addtop">
		
	</div>
	<el-table
	:data="data"
	id="table"
	border
	height="900"
	style="width: 100%;">
	<el-table-column
	prop="id"
	label="id"
	width="100"></el-table-column>
		<el-table-column
	prop="name"
	label="名字"
	width="200"></el-table-column>
	<el-table-column
	prop="hu"
	label="图片"
	width="180">
	<template v-slot:default="slotProps">
    <img :src="'/img/'+slotProps.row.hu" />
	</template>
	</el-table-column>

	</el-table>
	<button @click="click">add</button>
</div>
</template>

<script>
	export default{
		name:"add",
		data(){
			return{
				data:[{
					id:3,hu:'0.jpg'
				},
				{
					id:4,hu:'4.jpg'
				},
				],
					
			}
			
		},
		methods:{
			click(){
				this.data.push({name:1,hu:2})
			}
		}
	}
</script>

<style scoped>
	div{
		height: 100%;
		width: 100%;
	}
	#table *{
		text-align: center;
	}
	#addtop{
		height: 15%;
		border-bottom: 1px solid #EBEEF5;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
		position:relative;
		z-index: 40;
	}
	.el-table--border, .el-table--group{
		border: none;
	}
	img{
		height: auto;
		width: 150px
	}
</style>
