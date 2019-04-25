<template>
  	<transition :name="animation">
		<div v-if="isActive" class="modal is-active">
			<div class="modal-background" @click="cancel('outside')" />
			<div class="animation-content" :class="{ 'modal-content': !hasModalCard }" :style="{ width: newWidth }">

				<div tabindex="0" class="media-modal wp-core-ui">
					<button type="button" class="media-modal-close" @click="cancel('x')">
						<span class="media-modal-icon"><span class="screen-reader-text">Close panel</span></span>
					</button>
					<div class="media-modal-content">
						<div class="media-frame mode-select wp-core-ui hide-menu">

							<div class="media-frame-title">
								<h1>{{title}} <span class="dashicons dashicons-arrow-down"></span></h1>
							</div>

							<div class="media-frame-content">

								<div class="modal-content-container">
									<component v-if="component" v-bind="props" v-on="events" :is="component" @close="close" />
									<div v-else-if="content" v-html="content" />
									<slot v-else/>
								</div>

							</div>

							<div class="media-frame-toolbar" v-if="$slots['modal-footer-left'] || $slots['modal-footer-right']">
								<div class="media-toolbar">
									<div class="media-toolbar-secondary" v-if="$slots['modal-footer-left']">
										<slot name="modal-footer-left"></slot>
									</div>
									<div class="media-toolbar-primary search-form" v-if="$slots['modal-footer-right']">
										<slot name="modal-footer-right"></slot>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import {
    removeElement
} from "../../utils/helpers";
import config from "../../utils/config";

export default {
    name: "wp-modal",
    props: {
		active: Boolean,
		title: String,
        component: [Object, Function],
        content: String,
        programmatic: Boolean,
        props: Object,
        events: Object,
        width: {
            type: [String, Number],
            default: 960
        },
        hasModalCard: Boolean,
        animation: {
            type: String,
            default: "zoom-out"
        },
        canCancel: {
            type: [Array, Boolean],
            default: () => {
                return config.defaultModalCanCancel ?
                    config.defaultModalCanCancel :
                    ["escape", "x", "outside", "button"];
            }
        },
        onCancel: {
            type: Function,
            default: () => {}
        },
        scroll: {
            type: String,
            default: () => {
                return config.defaultModalScroll ? config.defaultModalScroll : "clip";
            },
            validator: value => {
                return ["clip", "keep"].indexOf(value) >= 0;
            }
        }
    },
    data() {
        return {
            isActive: this.active || false,
            savedScrollTop: null,
            newWidth: typeof this.width === "number" ? this.width + "px" : this.width
        };
    },
    computed: {
        cancelOptions() {
            return typeof this.canCancel === "boolean" ?
                this.canCancel ?
                ["escape", "x", "outside", "button"] :
                [] :
                this.canCancel;
        },
        showX() {
            return this.cancelOptions.indexOf("x") >= 0;
        }
    },
    watch: {
        active(value) {
            this.isActive = value;
        },
        isActive() {
            this.handleScroll();
        }
    },
    methods: {
        handleScroll() {
            if (typeof window === "undefined") return;

            if (this.scroll === "clip") {
                if (this.isActive) {
                    document.documentElement.classList.add("is-clipped");
                } else {
                    document.documentElement.classList.remove("is-clipped");
                }
                return;
            }

            this.savedScrollTop = !this.savedScrollTop ?
                document.documentElement.scrollTop :
                this.savedScrollTop;

            if (this.isActive) {
                document.body.classList.add("is-noscroll");
            } else {
                document.body.classList.remove("is-noscroll");
            }

            if (this.isActive) {
                document.body.style.top = `-${this.savedScrollTop}px`;
                return;
            }

            document.documentElement.scrollTop = this.savedScrollTop;
            document.body.style.top = null;
            this.savedScrollTop = null;
        },

        /**
         * Close the Modal if canCancel and call the onCancel prop (function).
         */
        cancel(method) {
            if (this.cancelOptions.indexOf(method) < 0) return;

            this.onCancel.apply(null, arguments);
            this.close();
        },

        /**
         * Call the onCancel prop (function).
         * Emit events, and destroy modal if it's programmatic.
         */
        close() {
            this.$emit("close");
            this.$emit("update:active", false);

            // Timeout for the animation complete before destroying
            if (this.programmatic) {
                this.isActive = false;
                setTimeout(() => {
                    this.$destroy();
                    removeElement(this.$el);
                }, 150);
            }
        },

        /**
         * Keypress event that is bound to the document.
         */
        keyPress(event) {
            // Esc key
            if (this.isActive && event.keyCode === 27) this.cancel("escape");
        }
    },
    created() {
        if (typeof window !== "undefined") {
            document.addEventListener("keyup", this.keyPress);
        }
    },
    beforeMount() {
        // Insert the Modal component in body tag
        // only if it's programmatic
        this.programmatic && document.body.appendChild(this.$el);
    },
    mounted() {
        if (this.programmatic) this.isActive = true;
        else if (this.isActive) this.handleScroll();
    },
    beforeDestroy() {
        if (typeof window !== "undefined") {
            document.removeEventListener("keyup", this.keyPress);
            // reset scroll
            document.documentElement.classList.remove("is-clipped");
            const savedScrollTop = !this.savedScrollTop ?
                document.documentElement.scrollTop :
                this.savedScrollTop;
            document.body.classList.remove("is-noscroll");
            document.documentElement.scrollTop = savedScrollTop;
            document.body.style.top = null;
        }
    }
};
</script>

<style lang="scss">
.modal {
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	align-items: center;
	display: none;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	position: fixed;
	z-index: 40;

	&.is-active {
		display: flex;
	}

	.media-modal {
		position: relative;
		top:initial;
		left:initial;
		right: initial;
		bottom: initial;
	}

	.media-modal-content {
		position: relative;
		top:initial;
		left: initial;
		right: initial;
		bottom: initial;
	}

	.media-frame-content {
		top: 50px;
	}

	.modal-content-container {
		padding: 20px 16px;
	}

}

.modal-background {
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	background-color: rgba(0,0,0,.7);
}

.modal-card,
.modal-content {
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
	margin: 0 auto;
    max-height: calc(100vh - 40px);
	width: 640px;
	box-shadow: 0 5px 15px rgba(0,0,0,.7);
}

.modal-close {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	-moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10,10,10,.2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: 0;
    position: relative;
    vertical-align: top;
	width: 20px;

	background: 0 0;
    height: 40px;
    position: fixed;
    right: 20px;
    top: 20px;
	width: 40px;

	&.is-large {
		height: 32px;
		max-height: 32px;
		max-width: 32px;
		min-height: 32px;
		min-width: 32px;
		width: 32px;
	}

	&:after, &:before {
		background-color: #fff;
		content: "";
		display: block;
		left: 50%;
		position: absolute;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
		-webkit-transform-origin: center center;
		transform-origin: center center;
	}

	&:before {
		 height: 2px;
    	width: 50%;
	}

	&:after {
		height: 50%;
    	width: 2px;
	}
}

</style>
