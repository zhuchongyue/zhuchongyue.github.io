<style lang="sass">
	@import "Rotate.scss";
</style>
<template>
	<div class="rotate">
		<div class="rotate-sum">
			<div v-show="showDesc" transition="occur"> 
				<h2>{{selectedItem.title}}</h2>
				<img class="rotate-sum-img" :src="selectedItem.img" alt="{{selectedItem.title}}">
			</div>
		</div>
		<div class="rotate-stage">

			<div :style="containerClass" class="rotate-container">
				<a v-for="vueItem in vueArr1" :style='{transform: "rotateY(" + $index * 40 + "deg) translateZ(200px)"}' class="rotate-item" href="#" @mouseleave="unSelectIem" @mouseenter="selectItem(vueArr1,$index)"  @click.prevent="">{{vueItem.title}}</a>
			</div>
			<div :style="containerClass" class="rotate-container rotate-container1">
				<a v-for="vueItem in vueArr1" :style='{transform: "rotateY(" + (-20 + $index * 40 ) + "deg) translateZ(200px)"}' class="rotate-item" href="#" @mouseleave="unSelectIem" @mouseenter="selectItem(vueArr1,$index)"  @click.prevent="">{{vueItem.title}}</a>
			</div>
			<div :style="containerClass" class="rotate-container rotate-container2">
				<a v-for="vueItem in vueArr1" :style='{transform: "rotateY(" + $index * 40 + "deg) translateZ(200px)"}' class="rotate-item" href="#" @mouseleave="unSelectIem" @mouseenter="selectItem(vueArr1,$index)"  @click.prevent="">{{vueItem.title}}</a>
			</div>

			<div :style="containerClass" class="rotate-container rotate-container3">
				<a v-for="vueItem in vueArr1" :style='{transform: "rotateY(" + (-20 + $index * 40 ) + "deg) translateZ(200px)"}' class="rotate-item" href="#" @mouseleave="unSelectIem" @mouseenter="selectItem(vueArr1,$index)"  @click.prevent="">{{vueItem.title}}</a>
			</div>
		</div>
		<div class="rotate-detail">

			<ul v-show="showDesc" transition="occur">
				<li>author:{{selectedItem.author}}</li>
				<li>type:{{selectedItem.type}}</li>
				<li>tags:{{selectedItem.tag && selectedItem.tag.toString()}}</li>
				<li>Date:{{selectedItem.date}}</li>
				<li>Desc:</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'rotate',
		data(){
			return {
				msg: "rotate",
				labels:[],
				indexArr: [1,2,3,4,5,6],
				rotateDeg:0,
				vueArr: ['vue源码学习','vue-resource源码学习','vue-router源码学习','vux组件学习','vue2.0初体验','vue渲染原理','vuex状态管理','vue插件书写','vue自定义指令'],
				vueArr1: [
					{
						author: '南辕北辙',
						title: 'vue源码学习',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','mvvm']
					},
					{
						author: '南辕北辙',
						title: 'vue-resource源码学习',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','ajax']
					},
					{
						author: '南辕北辙',
						title: 'vue-router源码学习',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','router']
					},
					{
						author: '南辕北辙',
						title: 'vux组件学习',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','vux','component']
					},
					{
						author: '南辕北辙',
						title: 'vue2.0初体验',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','vue2','virtual dom']
					},
					{
						author: '南辕北辙',
						title: 'vue渲染原理',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue']
					},
					{
						author: '南辕北辙',
						title: 'vuex状态管理',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue','vuex']
					},
					{
						author: '南辕北辙',
						title: 'vue插件书写',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue']
					},
					{
						author: '南辕北辙',
						title: 'vue自定义指令',
						img: '/resource/images/vue_logo.png',
						date: '2016.06.10',
						type: '原创',
						tag: ['vue']
					}
				],
				showDesc: false,
				selectedItem: {},
				rotateTimer: null

			}
		},
		computed: {
			containerClass : function() {
				return {
					transform: "rotateX(10deg) rotateY(" + this.rotateDeg + "deg)",
					transition: "all 0.5s",
					transformOrigin:"280px center 13px"
				}
			}
		},
		created(){
		},
		ready(){
			this.registerTimer();
		},
		methods: {
			registerTimer(){
				var _this = this;
			    this.rotateTimer = setInterval(()=>{
					_this.rotateDeg += 40;
				},2000)
			},
			rotateFunc(){
				this.rotateDeg += 40;
			},
			selectItem(arr,itemIndex) {
				window.clearInterval(this.rotateTimer);
				this.showDesc = true;
				this.selectedItem = arr[itemIndex];
			},
			unSelectIem() {
				this.showDesc = false;
				this.registerTimer();
				setTimeout(()=>{
					if(!this.showDesc)
					this.selectedItem = {}
				},500)
			}
		},
		route: {
			data(transition){
				this.$http.get('../mock/item.json').then((resp)=>{
					this.labels = resp.data.splice(0,2);
				});
				transition.next();
			},
			route: {
				deactive(){
					console.log('deactive')
				}
			}
		}
	}
</script>