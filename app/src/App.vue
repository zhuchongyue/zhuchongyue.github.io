<style lang="sass">
	@import "App.scss";
</style>

<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	
	export default {

		name: 'app',

		ready(){
			console.log('app ready')
		}

	}

</script>