<template>
  <button type="button" :class="classes" :disabled="disabled" @click="handleClick" role="button">
      <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
    name: 'wp-button',
    props: {
        type: {
            default: 'secondary',
            validator (value) {
                return oneOf(value, ['primary', 'secondary']);
            }
        },
        hero: Boolean,
        disabled: Boolean
    },
    computed: {
        classes () {
            return [
                'button',
                'button-' + this.type,
                this.hero ? 'button-hero' : ''
            ];
        }
    },
    methods: {
        handleClick(event) {
			this.$emit('click', event);
        }
    },
}
</script>
