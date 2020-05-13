<template>
<div id="eldiv">
	<div id="addtop">
	<el-row :gutter="20">
	  <el-col :span="12"><el-input placeholder="请输入商品名" v-model="find">
						<el-button slot="append" icon="el-icon-search" @click="finditem"></el-button></el-input>
						</el-col>
		<el-col :span="12">
		<el-cascader v-model.number="findselect" :options="option"></el-cascader>
		</el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="12"><el-button @click="additem">添加商品</el-button></el-col>
	  <el-col :span="12"></el-col>
	</el-row>
	</div>
	<el-table
	id="table"
	v-if="reload"
	v-loading="loading"
	:data="data"
	border=true
	height="85%"
	style="width: 100%;">
	<el-table-column
	prop="id"
	label="id"
	width="50">
	</el-table-column>
	<el-table-column
	prop="name"
	label="名字"
	width="150"></el-table-column>
	<el-table-column
	prop="src1"
	label="图片"
	width="140">
	<template v-slot:default="slotProps">
    <el-image :src="'/img/'+slotProps.row.src1" 
	 :preview-src-list="slotProps.row.src1"
	lazy/>
	</template>
	</el-table-column>
	<el-table-column
	prop="commodity"
	label="种类"
	width="70">
	</el-table-column>
	<el-table-column
	prop="sale"
	label="销量"
	width="70">
	</el-table-column>
	<el-table-column
	prop="num"
	label="总数"
	width="100">
	</el-table-column>
	<el-table-column
	prop="price"
	label="价格"
	width="130">
	</el-table-column>
	<el-table-column
	prop="src1"
	label="操作"
	width="180">
	<template v-slot:default="slotProps">
	<el-button @click.native="diga(slotProps.row)">编辑</el-button>
	<el-button @click.native="remove(slotProps.row)">删除</el-button>
	</template>
	</el-table-column>
	</el-table>
	<el-dialog :visible.sync="dialogFormVisible"
	:before-close="close">
		<el-form :model="selectvalue">
			<span>名字<el-input label="名字" v-model="selectvalue.name"></el-input></span>
			<span>分类<el-cascader v-model.number="selectvalue.commodity" :options="option"></el-cascader></span>
			<span>图片<el-upload action="/api/Mygetdata"
			list-type="picture-card"
			:on-change="logsuccess"
			:file-list="selectvalue.src"
			:limit="3"
			:auto-upload="false"
			ref="upload"></el-upload></span>
			<span>数量<el-input label="数量" v-model="selectvalue.num"></el-input></span>
			<span>价格<el-input label="价格" v-model="selectvalue.price"></el-input></span>
			<el-button type="primary" @click="save">保存</el-button>
			<el-button type="primary" @click="close()" >取消</el-button>
		</el-form>
	</el-dialog>
</div>
</template>

<script>
	export default{
		name:"add",
		data(){
			
			return{
				find:'',
				findselect:'',
				loading:false,
				reload:true,
				data:[
				],
			selectvalue:{
				id:-1,
				name:'',
				src:[],
				commodity:[],
				num:0,
				price:0
			},
			dialogFormVisible:false,
			option:[{
				value:'衣服',
				label:'衣服',
				children:[{
					value:'男装',
					label:'男装',
					children:[	{
								value:'男装夏装',
								label:'男装夏装',	
								},
								{
								value:'男装冬装',
								label:'男装冬装',	
								},{
								value:'男装衬衣',
								label:'男装衬衣',	
								},
								{
								value:'男装裤子',
								label:'男装裤子',	
								},
								{
								value:'男装其他',
								label:'男装其他',	
								},]
				},
				{
				value:'女装',
				label:'女装',
				children:[	{
							value:'女装夏装',
							label:'女装夏装',	
							},
							{
							value:'女装冬装',
							label:'女装冬装',	
							},{
							value:'女装衬衣',
							label:'女装衬衣',	
							},
							{
							value:'女装裤子',
							label:'女装裤子',	
							},
							{
							value:'女装其他',
							label:'女装其他',	
							},]
				},
				{
				value:'鞋子',
				label:'鞋子',
				children:[	{
							value:'运动鞋',
							label:'运动鞋',	
							},
							{
							value:'高跟鞋',
							label:'高跟鞋',	
							},{
							value:'拖鞋',
							label:'拖鞋',	
							},
							{
							value:'凉鞋',
							label:'凉鞋',	
							},
							{
							value:'布鞋',
							label:'布鞋',	
							},
							{
							value:'棉鞋',
							label:'棉鞋',	
							},]
				},
				{
				value:'童装',
				label:'童装',
				children:[	{
							value:'童装夏装',
							label:'童装夏装',	
							},
							{
							value:'童装冬装',
							label:'童装冬装',	
							},{
							value:'童装衬衣',
							label:'童装衬衣',	
							},
							{
							value:'童装裤子',
							label:'童装裤子',	
							},
							{
							value:'童装裙子',
							label:'童装裙子',	
							},
							{
							value:'童装其他',
							label:'童装其他',	
							},
							]
				},
				{
				value:'其他',
				label:'其他',
				children:[	{
											value:'围巾',
											label:'围巾',	
											},
											{
											value:'袜子',
											label:'袜子',	
											},{
											value:'内裤',
											label:'内裤',	
											},
											{
											value:'手套',
											label:'手套',	
											},
											{
											value:'帽子',
											label:'帽子',	
											},
							]
				}]
			},
			{
				value:'电具',
				label:'电具',
				children:[{
					value:'手机通讯',
					label:'手机通讯',
					children:[	{
								value:'普通手机',
								label:'普通手机',	
								},
								{
								value:'游戏手机',
								label:'游戏手机',	
								},{
								value:'老人手机',
								label:'老人手机',	
								},
								{
								value:'对讲机',
								label:'对讲机',	
								},
								{
								value:'手机其他',
								label:'手机其他',	
								},]
				},
				{
				value:'通讯配件',
				label:'通讯配件',
				children:[	{
							value:'手机壳',
							label:'手机壳',	
							},
							{
							value:'手机膜',
							label:'手机膜',	
							},{
							value:'电池',
							label:'电池',	
							},
							{
							value:'手机耳机',
							label:'手机耳机',	
							},
							{
							value:'数据线',
							label:'数据线',	
							},
							{
							value:'手机支架',
							label:'手机支架',	
							},
							{
							value:'充电器',
							label:'充电器',	
							},
							{
							value:'配件其他',
							label:'配件其他',	
							},
							]
				},
				{
				value:'相机',
				label:'相机',
				children:[	{
							value:'数码相机',
							label:'数码相机',	
							},
							{
							value:'微单相机',
							label:'微单相机',	
							},{
							value:'单反相机',
							label:'单反相机',	
							},
							{
							value:'拍立得',
							label:'拍立得',	
							},
							{
							value:'运动相机',
							label:'运动相机',	
							},
							{
							value:'摄像机',
							label:'摄像机',	
							},]
				},
				{
				value:'相机配件',
				label:'相机配件',
				children:[	{
							value:'镜头',
							label:'镜头',	
							},
							{
							value:'数码相框',
							label:'数码相框',	
							},{
							value:'三脚架',
							label:'三脚架',	
							},
							{
							value:'存储器',
							label:'存储器',	
							},
							{
							value:'滤镜',
							label:'滤镜',	
							},
							]
				},
				{
				value:'家用电器',
				label:'家用电器',
				children:[	{
											value:'冰箱',
											label:'冰箱',	
											},
											{
											value:'电视',
											label:'电视',	
											},{
											value:'洗衣机',
											label:'洗衣机',	
											},
											{
											value:'空调',
											label:'空调',	
											},
											{
											value:'电饭煲',
											label:'电饭煲',	
											},
											{
											value:'高压锅',
											label:'高压锅',	
											},
							]
				}]
			},
			{
				value:'家具',
				label:'家具',
				children:[{
					value:'房间用具',
					label:'房间用具',
					children:[	{
								value:'餐桌',
								label:'餐桌',	
								},
								{
								value:'椅子',
								label:'椅子',	
								},{
								value:'电脑桌',
								label:'电脑桌',	
								},
								{
								value:'书桌',
								label:'书桌',	
								},
								{
								value:'沙发',
								label:'沙发',	
								},
								{
								value:'衣柜',
								label:'衣柜',	
								},
								{
								value:'电视柜',
								label:'电视柜',	
								},{
								value:'房间其他',
								label:'房间其他',	
								},
								]
				},
				{
				value:'厨房用具',
				label:'厨房用具',
				children:[	{
							value:'水具酒具',
							label:'水具酒具',	
							},
							{
							value:'烹饪锅具',
							label:'烹饪锅具',	
							},{
							value:'炒锅',
							label:'炒锅',	
							},
							{
							value:'碗碟套餐',
							label:'碗碟套餐',	
							},
							{
							value:'厨房配件',
							label:'厨房配件',	
							},
							{
							value:'刀剪菜板',
							label:'刀剪菜板',	
							},
							{
							value:'锅具套餐',
							label:'锅具套餐',	
							},
							{
							value:'茶具咖啡机',
							label:'茶具咖啡机',	
							},
							{
							value:'厨房置物架',
							label:'厨房置物架',	
							},
							{
							value:'炉灶',
							label:'炉灶',	
							},
							]
				},
				{
				value:'床具',
				label:'床具',
				children:[	{
							value:'单人床',
							label:'单人床',	
							},
							{
							value:'双人床',
							label:'双人床',	
							},{
							value:'枕头',
							label:'枕头',	
							},
							{
							value:'被子',
							label:'被子',	
							},
							{
							value:'床头柜',
							label:'床头柜',	
							},
							]
				},
				]
			},
			{
				value:'食品',
				label:'食品',
				children:[{
					value:'海鲜水产',
					label:'海鲜水产',
					children:[	{
								value:'鱼类',
								label:'鱼类',	
								},
								{
								value:'虾类',
								label:'虾类',	
								},{
								value:'蟹类',
								label:'蟹类',	
								},
								{
								value:'贝类',
								label:'贝类',	
								},
								{
								value:'海参',
								label:'海参',	
								},
								{
								value:'鱿鱼章鱼',
								label:'鱿鱼章鱼',	
								},
								{
								value:'活鲜三文鱼',
								label:'活鲜三文鱼',	
								},
								{
								value:'大闸蟹',
								label:'大闸蟹',	
								},
								{
								value:'小龙虾',
								label:'小龙虾',	
								},
								{
								value:'海鲜加工品',
								label:'海鲜加工品',	
								},
								{
								value:'海产干品',
								label:'海产干品',	
								},
								]
				},
				{
				value:'新鲜水果',
				label:'新鲜水果',
				children:[	{
							value:'苹果',
							label:'苹果',	
							},
							{
							value:'橘子',
							label:'橘子',	
							},{
							value:'奇异果',
							label:'奇异果',	
							},
							{
							value:'火龙果',
							label:'火龙果',	
							},
							{
							value:'榴莲',
							label:'榴莲',	
							},
							{
							value:'芒果',
							label:'芒果',	
							},
							{
							value:'椰子',
							label:'椰子',	
							},
							{
							value:'车厘子',
							label:'车厘子',	
							},
							{
							value:'百花果',
							label:'百花果',	
							},
							{
							value:'柚子',
							label:'柚子',	
							},
							]
				},
				{
				value:'蔬菜蛋类',
				label:'蔬菜蛋类',
				children:[	{
							value:'蛋品',
							label:'蛋品',	
							},
							{
							value:'叶菜类',
							label:'叶菜类',	
							},{
							value:'根茎类',
							label:'根茎类',	
							},
							{
							value:'葱姜蒜椒',
							label:'葱姜蒜椒',	
							},
							{
							value:'茄果瓜类',
							label:'茄果瓜类',	
							},
							{
							value:'半加工蔬菜',
							label:'半加工蔬菜',	
							},
							{
							value:'半加工豆制品',
							label:'半加工豆制品',	
							},
							{
							value:'玉米山药地瓜红薯',
							label:'玉米山药地瓜红薯',	
							},
							]
				},
				{
				value:'精选肉类',
				label:'精选肉类',
				children:[	{
							value:'猪牛羊',
							label:'猪牛羊',	
							},
							{
							value:'鸡鸭鹅',
							label:'鸡鸭鹅',	
							},{
							value:'冷鲜肉',
							label:'冷鲜肉',	
							},
							{
							value:'特色肉类',
							label:'特色肉类',	
							},
							{
							value:'冷藏熟食',
							label:'冷藏熟食',	
							},
							{
							value:'鸡翅',
							label:'鸡翅',	
							},
							]
				},
			]
			},
			],
			defaultselect:[]
			}
		},
		mounted() {let myitem
			myitem=document.getElementsByClassName("el-table__body-wrapper")[0].setAttribute('id','tablebody');
			this.getitem()
		},
		watch:{
			findselect(){
				let type="findselect"
				if(this.findselect=='')
				{
					type="backitem"
				}
				this.loading=true
				this.$axios({
					methods:'get',
					url:'/getitem',
					params:{
						type:type,
						find:this.findselect[2]
					}
				}).then((data)=>{
					this.data=data.data;
					this.loading=false
				})
			}
		},
		methods:{
			
			finditem(){
				this.loading=true
			this.$axios({
			methods:'get',
			url:'/getitem',
			params:{
				type:"getitem",
				find:this.find
			}
			}).then((data)=>{
		this.data=data.data;
		this.loading=false
			})
			},
			remove(item){
				this.loading=true
				this.$axios({
					methods:'get',
					url:'/getitem',
					params:{
						type:"removeitem",
						id:item.id
					}
				}).then((data)=>{
					this.loading=false
					let index=-1
					for (let i = 0; i < this.data.length; i++) {
					if (this.data[i].id == item.id)
					{ index=i
					console.log(index)
					}
					} 
					this.data.splice(index, 1); 
				})
			
					
			},
			getitem(){
				this.$axios({
					methods:'get',
					url:'/getitem',
					params:{
						type:"backitem"
					}
				}).then((data)=>{
					if(data.data=="")
					{	this.$message("尚未登录")
						this.$router.push('/denglu')
					}
					else{
						this.data=data.data;
						
					}
				})
			},
			diga(data){let src1={
				name:'',
				url:''
			} 	
				console.log(data)
				let imgsrc=[]
				this.selectvalue=data
				src1.name=data.src1
				src1.url='/img/'+data.src1
				imgsrc.push(src1)
				if(data.commodity instanceof Array)
				{}
				else{
					this.selectvalue.commodity=data.commodity.split(' ');
				}
				this.selectvalue.src=imgsrc.slice(0)
				imgsrc=[]
				
				this.dialogFormVisible=true
					
			},
			additem(){
			this.dialogFormVisible=true
			this.selectvalue={
				id:-1,
				name:'',
				num:0,
				commodity:[],
				src:[],
			}
				this.dialogFormVisible=true
			},
			close(){
			this.selectvalue.src=[]
			this.dialogFormVisible=false
	
		
			},
			logsuccess(li,list){
				this.selectvalue.src=list
			
			},
			ifundefind(res){
				if(res==undefined)
				{
					return ''
				}
				else{
					return res.name
				}
			},
			save(){
				this.loading=true
				
				this.$axios({
					methods:"get",
					url:"/getitem",
					params: {	type:"item",
								id:this.selectvalue.id,
								num:this.selectvalue.num,
								name:this.selectvalue.name,
								commodity:this.selectvalue.commodity.toString(),
								src1:this.ifundefind(this.selectvalue.src[0]),
								src2:this.ifundefind(this.selectvalue.src[1]),
								src3:this.ifundefind(this.selectvalue.src[2]),
								price:this.selectvalue.price
							},
						}).then((data)=>{
								this.dialogFormVisible=false
								this.selectvalue={
								id:-1,
								name:'',
								num:0,
								commodity:[],
								src:[],
							}
							this.$refs.upload.submit()
							this.getitem()
							this.loading=false
						})
						
						
				}
		}
	}
</script>

<style scoped>
	.el-row{
		
	}
	#eldiv{
		height: 100%;
		width: 98.7%;
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
	.el-table__body-wrapper{
		overflow:scroll
	}
	#tablebody{
		overflow: scroll;
	}
</style>
