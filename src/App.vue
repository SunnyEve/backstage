<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	body,
	div,
	span,
	header,
	footer,
	nav,
	section,
	aside,
	article,
	ul,
	dl,
	dt,
	dd,
	li,
	a,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	i,
	b,
	textarea,
	button,
	input,
	select,
	figure,
	figcaption {
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		font-family: "Microsoft Yahei", sans-serif;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		&:focus {
			outline: none;
		}
	}
	
	body,
	html {
		margin: 0;
		width: 100%;
		height: 100%;
	}
	
	#app {
		width: 100%;
		height: 100%;
	}
</style>