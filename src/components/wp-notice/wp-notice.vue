<template>
	<div :class="classes" v-if="!closed">
		<p><slot></slot></p>
		<button type="button" class="notice-dismiss" v-if="dismissible" @click="close">
			<span class="screen-reader-text">Dismiss this notice.</span>
		</button>
	</div>
</template>

<style lang="scss">
.vue-wp-notice {
	background: #fff;
  	border-left: 4px solid #fff;
  	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  	margin: 5px 0 2px 0;
  	padding: 1px 12px;

  	p {
  		margin: 0.5em 0;
  		padding: 2px;
  	}

  	&--large {
  		padding: 10px 20px;
  	}

  	&.notice-success {
  		border-left-color: #46b450;
  	}

  	&.notice-warning {
    	border-left-color: #ffb900;
  	}

  	&.notice-error {
    	border-left-color: #dc3232;
    	a {
      		text-decoration: underline;
    	}
  	}

  	&.notice-info {
    	border-left-color: #00a0d2;
  	}

  	.notice-dismiss {
    	position: absolute;
    	top: 0;
    	right: 1px;
    	border: none;
    	margin: 0;
    	padding: 9px;
    	background: none;
    	color: #72777c;
    	cursor: pointer;

    	&:before {
      		background: 0 0;
      		color: #72777c;
      		content: "\f153";
      		display: block;
      		font: 400 16px/20px dashicons;
      		speak: none;
      		height: 20px;
      		text-align: center;
      		width: 20px;
      		-webkit-font-smoothing: antialiased;
      		-moz-osx-font-smoothing: grayscale;
    	}

    	&:focus {
      		outline: none;
      		box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
    	}

    	&:hover,
    	&:active,
    	&:focus {
    	  	&:before {
    	    	color: #c00;
    	  	}
    	}
  	}

  	&.is-dismissible {
  		padding-right: 38px;
  		position: relative;
  	}

  	&.is-alt {
  	  	box-shadow: none;
  	  	&.notice-success {
  	    	background-color: #ecf7ed;
  	  	}
  	  	&.notice-warning {
  	    	background-color: #fff8e5;
  	  	}
  	  	&.notice-error {
  	    	background-color: #fbeaea;
  	  	}
  	  	&.notice-info {
  	    	background-color: #e5f5fa;
  	  	}
  	}
}
</style>

<script>
import { oneOf } from '../../utils/assist';

export default {
	name: "wp-notice",
  	props: {
    	type: {
      		default: "success",
      		validator(value) {
        		return oneOf(value, ["info", "warning", "success", "error"]);
      		}
    	},
    	alternative: Boolean,
    	dismissible: Boolean
  	},
  	computed: {
    	classes() {
    	  	return [
    	    	"vue-wp-notice",
    	    	"notice-" + this.type,
    	    	this.alternative ? "is-alt" : "",
    	    	this.dismissible ? "is-dismissible" : ""
    	  	];
    	}
  	},
  	data() {
    	return {
      		closed: false
    	};
  	},
  	methods: {
    	close(e) {
    	  	this.closed = true;
    	  	this.$emit("on-close", e);
    	}
  	}
};
</script>
