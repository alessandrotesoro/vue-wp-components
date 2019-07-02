<template>
  	<aside class="vuewp-aside" :style="{ width }">
    	<slot></slot>
  	</aside>
</template>

<style lang="scss" scoped>
	.vuewp-aside {
		overflow: auto;
		box-sizing: border-box;
		flex-shrink: 0;
	}
</style>

<script>
export default {
	name: 'wp-aside',
  	componentName: 'wp-aside',
  	props: {
    	width: {
      		type: String,
      		default: '300px'
    	}
  	}
};
</script>
