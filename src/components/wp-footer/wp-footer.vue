<template>
	<footer class="vuewp-footer" :style="{ height }">
    	<slot></slot>
  	</footer>
</template>

<style lang="scss" scoped>
	.vuewp-footer {
		padding: 0 20px;
		box-sizing: border-box;
		flex-shrink: 0;
	}
</style>

<script>
export default {
  	name: 'wp-footer',
  	componentName: 'wp-footer',
  	props: {
    	height: {
      		type: String,
      		default: '60px'
    	}
  	}
};
</script>
