<style lang="sass">
	@import "Header.scss"
</style>
<template>
	<div class="header">

		<div class="header-content">
			<nav>
				<div class="header-nav">
					<a href="/" class="header-nav-item">
						南辕北辙
					</a>
					<a href="" class="header-nav-item">
						Es6
					</a>
					<a href="" class="header-nav-item">
						HTML5
					</a>
					<a href="" class="header-nav-item">
						CSS3
					</a>
				</div>
			</nav>
			<div class="header-search">
				<input type="text" placeholder="Looking for what?" class="header-search-input"><button class="header-search-btn">Search</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'myHeader',
		ready(){
			console.log('header ready');
		}
	}
</script>