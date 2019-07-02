<template>
	<section class="vuewp-container" :class="{ 'is-vertical': isVertical }">
    	<slot></slot>
  	</section>
</template>

<style lang="scss" scoped>
.vuewp-container {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	min-width: 0;

	&.is-vertical {
		flex-direction: column;
	}
}
</style>

<script>
export default {
	name: "wp-container",
	componentName: "wp-container",
	props: {
		direction: String
	},
  	computed: {
		isVertical() {
		if (this.direction === "vertical") {
			return true;
		} else if (this.direction === "horizontal") {
			return false;
		}
		return this.$slots && this.$slots.default
			? this.$slots.default.some(vnode => {
				const tag = vnode.componentOptions && vnode.componentOptions.tag;
				return tag === "wp-header" || tag === "wp-footer";
			})
			: false;
		}
  	}
};
</script>
