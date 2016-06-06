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
		data(){
			return {
				msg: "hello vue && es6"
			}
		},
		create(){
			console.log('create')
		}
	}

</script>