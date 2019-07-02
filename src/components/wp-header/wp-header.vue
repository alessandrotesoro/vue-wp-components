<template>
	<header class="vuewp-header" :style="{ height }">
    	<slot></slot>
  	</header>
</template>

<style lang="scss" scoped>
	.vuewp-header {
		padding: 0 20px;
		box-sizing: border-box;
		flex-shrink: 0;
	}
</style>

<script>
export default {
	name: 'wp-header',
	componentName: 'wp-header',
	props: {
  		height: {
    		type: String,
    		default: '60px'
  		}
	}
};
</script>
