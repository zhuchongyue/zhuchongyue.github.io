<style lang="sass">
	@import "Home.scss"
</style>
<template>
	<div class="home">
		<h1>home</h1>
		<h2>{{ msg }}</h2>
	</div>
</template>
<script>
	
	export default {
		name: "home",
		ready() {
			console.log('home ready')
		},
		data(){
			return {
				msg: "hello vue && es6"
			}
		},
		created(){
			console.log('create')
		}
	}

</script>