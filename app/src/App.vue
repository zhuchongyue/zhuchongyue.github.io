<style lang="sass">
	@import "App.scss";
</style>
<template>

	<div>
		<my-header></my-header>

		<div class="container">

			<router-view></router-view>

			<my-footer></my-footer>

		</div>
	</div>

	
</template>

<script>

	import myHeader from "./common/Header/Header.vue"

	import myFooter from "./common/Footer/Footer.vue"
	
	export default {

		components: { myHeader, myFooter},

		name: 'app',

		ready(){
			console.log('app ready')
		},
		create() {
			console.log('app create')
		}

	}

</script>