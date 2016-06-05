<style lang="sass">
	@import "Html5.scss"
</style>

<template>
	<div class="home">
		<h1>hmtl5</h1>
		<h2>{{ msg }}</h2>
	</div>
</template>
<script>
	
	export default {
		data(){
			return {
				msg: "hello html5"
			}
		},
		create(){
			console.log('create html5')
		}
	}

</script>