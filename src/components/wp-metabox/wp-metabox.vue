<template>
	<div :class="classes">

		<button type="button" class="handlediv" v-if="closable" @click="handleToggle">
			<span class="dashicons dashicons-arrow-down" v-if="closed"></span>
			<span class="dashicons dashicons-arrow-up" v-else></span>
		</button>

		<h2 class="hndle">
			<span>{{title}}</span>
		</h2>

		<div class="inside">
			<slot></slot>

			<div class="wp-metabox-footer" v-if="$slots['metabox-footer']">
				<slot name="metabox-footer"></slot>
			</div>
		</div>

	</div>
</template>

<script>
export default {
    name: 'wp-metabox',
    props: {
        title : String,
        closable: Boolean
    },
    data () {
        return {
            closed: false,
        };
    },
    computed: {
        classes () {
            return [
                'postbox',
                'wp-metabox',
                this.closed ? 'closed' : ''
            ];
        }
    },
    methods: {
        handleToggle(event) {
            this.closed = !this.closed;
            this.$emit('metaboxToggle', event);
        }
    },
}
</script>
