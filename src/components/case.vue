<template>
	<el-container>
		<el-header>
	
			<router-link :to="{path:'/afterbuy' , query:{que:all}}" v-if="all!=0">	
			<el-button @click="postbuy">
				结算
			</el-button>
			</router-link>
		</el-header>
		<el-main>
		<!-- <el-table
	      :data="caselist"
	      style="width: 100%">
	      <el-table-column
	        prop="name"
	        label="名字"
	        width="180">
		
	      </el-table-column>
	      <el-table-column
	        prop="src1"
	        label="图片"
	        width="180">
			<template v-slot:default="slotcase">
			<el-image :src="'/img/'+slotcase.row.src1"
			 :preview-src-list="slotcase.row.src1"
			lazy/>
			</template>
	      </el-table-column>
	      <el-table-column
	        prop="buynum"
	        label="数量">
			<template v-slot:default="slotcase">
				<el-input-number :min="0"
				:max="slotcase.row.num"
				v-model="slotcase.row.buynum"></el-input-number>
			</template>
	      </el-table-column>
	    </el-table> -->
		<caseitem v-for="(item,index) in $root.mylist" :itemdata="item" :key="index">
			
		</caseitem>
		</el-main>
		<el-footer :key="$root.version"><span >{{$root.all}}</span></el-footer>
		</el-container>
</template>

<script>
	import caseitem from './caseitem.vue'
	export default{
		name:'case',
		data(){
			return{
				caselist:this.$root.mylist,
				
			}
		},
		computed:{
			all(){
				if(this.$root.list==[])
				{
					return 0
				}
				else{
					let add=0
					for(let item of this.$root.mylist)
					{
					
						add+=item.buynum*item.price
					}
					return add
		
				}
				
			}
		},
		components:{
			caseitem
		},
		methods:{
			postbuy(){
				this.$axios({
					methods:'post',
					url:'/AfterBuy',
					params:{
						id:this.$root.itemindex,
						name:this.$root.itemname,
						src:this.$root.itemsrc,
						all:this.$root.itemall,
						num:this.$root.itemnum
						}
				})
			}
		}
	}
</script>

<style>
	.el-drawer__body{
		overflow: scroll;
	}
</style>
