<template>
	<el-container>
		<el-aside>
			<el-Carousel>
				<el-carousel-item v-for="item in picturelist" :key="item">
					<el-image :src="'/img/'+item"
							fit="cover"
							id="img"></el-image>
				    </el-carousel-item>
			</el-Carousel>
		</el-aside>
		<el-header>
		{{all.name}}
		</el-header>
		<el-main>
		{{all.price}}
		{{all.num}}
		<el-input-number v-model="num" :min="1" :max="all.num" @change="handleChange" label="购买数目" ></el-input-number>
		<!-- <router-link :to="{path:'/afterbuy' , query:{que:allprice}}"> --><el-button @click="postbuy">购买</el-button><!-- </router-link> -->
		<el-button @click="addcase">加入购物车</el-button>
		</el-main>
	</el-container>
</template>

<script>
	export default{
		name:"",
		data(){
			return{picturelist:[],
			all:{
			},
			num:1,
			list:[],
			Thebuy:[],
			appenArray:[]
			}
		},
		computed:{
			allprice(){
				if(this.all==undefined)
				{
				return 0	
				}
				else{
					return this.all.price*this.all.buynum
				}
			},
			numexist(){
				if(this.all.buynum instanceof Number)
				return true;
				else return false;
			}
		},
		mounted() {
		
			this.$axios({
				methods:'get',
				url:'/getitem',
				params:{
					type:'myitem',
					find:this.$route.query.que,
				}
			}).then((data)=>{
				this.all=data.data[0]
				this.all.buynum=1;
				this.picturelist.push(this.all.src1)
				if(this.all.src2=='')
				{}
				else{
					this.picturelist.push(this.all.src2)
				}
				if(this.all.src3=='')
				{}
				else{
					this.picturelist.push(this.all.src3)
				}
		
				console.log(this.all)
			})
		},
		updated() {
			if(this.$root.username == '用户')
			{this.$router.push('/denglu')
			}
		},
		methods:{
			handleChange(value){
				this.all.buynum=value;
			},
			postbuy(){
				
				this.$axios({
					method:"get",
					url:'/AfterBuy',
					params:{
						id:this.all.id,
						src:this.all.src1,
						name:this.all.name,
						all:this.allprice,
						num:this.all.buynum
						}
				}).then((r)=>{
						console.log(this.Thebuy)
				})
			},
			addcase(){
				
				if(this.$root.itemindex.includes(this.all.id.toString()))
				{
				}
				else{
					this.$root.mylist.push(this.all)
					this.$root.computeall();
				}
				console.log(this.$root.$data.mylist)
			}
		}
	}
</script>

<style>
</style>
