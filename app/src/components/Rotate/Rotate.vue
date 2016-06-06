<style lang="sass">
	@import "Rotate.scss";
</style>
<template>
	<div class="rotate">
		
	</div>
</template>
<script>
	export default {
		name: 'rotate',
		data(){
			return {
				msg: "rotate"
			}
		},
		created(){
			console.log('rotate create')
		},
		route: {
			data(transition){
				console.log("rotate data")
				this.$http.get('/mock/item.json').then((data)=>{
					console.log(data);
				});
				transition.next();
			}
		}
	}
</script>