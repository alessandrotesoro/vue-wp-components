<template>
	<main class="vuewp-main">
    	<slot></slot>
  	</main>
</template>

<style lang="scss" scoped>
	.vuewp-main {
		flex: 1;
		flex-basis: auto;
		overflow: auto;
		box-sizing: border-box;
		padding: 20px;
	}
</style>

<script>
export default {
	name: 'wp-main',
	componentName: 'wp-main'
};
</script>
