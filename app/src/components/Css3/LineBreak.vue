<style lang="sass">
	@import "LineBreak.scss";
</style>
<template>
<h2>
	word-break word-wrap
</h2>
<div>
	word-break: normal | break-all | keep-all
	<ol>
		<li>
			<strong>使用浏览器默认的换行规则</strong>
		</li>
		<li>
			<strong>break-all</strong>允许在单词内换行
		</li>
		<li>
			<strong>keep-all</strong>只能在半角空格或连字符处换行
		</li>
	</ol>
</div>

<div>
	word-wrap: normal | break-word
	<ol>
		<li>
			<strong>normal</strong> 只在允许的断字点换行（浏览器保持默认处理）。
		</li>
		<li>
			<strong>break-word</strong>
			在长单词或者URL地址内部进行换行
		</li>
	</ol>
</div>

<div>
	white-space: normal | nowrap | pre | pre-wrap | pre-line 
	<ol>
		<li>
			<strong>pre:</strong> 保留所有的空格和回车，且不允许折行。 
		</li>
		<li>
			<strong>pre-wrap:</strong> 保留所有的空格和回车，但是允许折行。
		</li>
		<li>
			<strong>pre-line:</strong> 会合并空格，且允许折行
		</li>
	</ol>
</div>
</template>
<script>
</script>