<template>
	<div>
<el-container>
	<el-aside width="20%">
		<el-menu>
			<el-menu-item index="/add">商品管理</el-menu-item>
		</el-menu>
	</el-aside>
	<el-main width="80%"><router-view></router-view></el-main>
</el-container>
</div>
</template>

<script>
</script>

<style scoped>
	.el-aside{

		height: 100%;
	}
	div{
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.el-container{
		height: 100%;
	}
</style>
