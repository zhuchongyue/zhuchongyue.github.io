<style lang="sass">
	@import "Rotate.scss";
</style>
<template>
	<div class="rotate">
		<a href="" v-for="label in labels">
			{{label.word}}
		</a>
	</div>
</template>
<script>
	export default {
		name: 'rotate',
		data(){
			return {
				msg: "rotate",
				labels:[]
			}
		},
		created(){
			console.log('rotate create')
		},
		route: {
			data(transition){
				console.log("rotate data")
				this.$http.get('../mock/item.json').then((resp)=>{
					this.labels = resp.data.splice(0,2);
				});
				transition.next();
			}
		}
	}
</script>