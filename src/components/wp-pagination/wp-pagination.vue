<template>
	<div class="tablenav">
		<div class="tablenav-pages">

			<span class="pagination-links">
					<a
						role="button"
						href="#"
						class="pagination-previous button"
						:disabled="!hasPrev"
						@click.prevent="prev"
						:aria-label="ariaPreviousLabel">
						&larr;
					</a>
					<a
						role="button"
						href="#"
						class="pagination-next button"
						:disabled="!hasNext"
						@click.prevent="next"
						:aria-label="ariaNextLabel">
						&rarr;
					</a>
					<span class="pagination-list" v-if="!simple">
						<!--First-->
						<a
							v-if="hasFirst"
							role="button"
							href="#"
							class="pagination-link button"
							@click.prevent="first"
							:aria-label="getAriaPageLabel(1, false)">
							1
						</a>

						<span v-if="hasFirstEllipsis" class="pagination-ellipsis">
							&hellip;
						</span>

						<!--Pages-->
						<a
							v-for="page in pagesInRange" :key="page.number"
							role="button"
							href="#"
							class="pagination-link button"
							:class="{ 'is-current': page.isCurrent }"
							@click.prevent="page.click"
							:aria-label="getAriaPageLabel(page.number, page.isCurrent)"
							:aria-current="page.isCurrent">
							{{ page.number }}
						</a>

						<!--Last-->
						<span v-if="hasLastEllipsis" class="pagination-ellipsis">
							{{ firstItem }}-{{ Math.min(current * perPage, total) }} / {{ total }}
						</span>
						<a
							v-if="hasLast"
							role="button"
							href="#"
							class="pagination-link button"
							@click.prevent="last"
							:aria-label="getAriaPageLabel(pageCount, false)">
							{{ pageCount }}
						</a>
					</span>
					<small class="info" v-if="simple">
						<template v-if="perPage == 1">
							{{ firstItem }} / {{ total }}
						</template>
						<template v-else>
							{{ firstItem }}-{{ Math.min(current * perPage, total) }} / {{ total }}
						</template>
					</small>
			</span>
		</div>
	</div>
</template>

<script>
export default {
    name: 'wp-pagination',
    props: {
        total: [Number, String],
        perPage: {
            type: [Number, String],
            default: 20
        },
        current: {
            type: [Number, String],
            default: 1
        },
        size: String,
        simple: Boolean,
        rounded: Boolean,
        order: String,
        iconPack: String,
        ariaNextLabel: String,
        ariaPreviousLabel: String,
        ariaPageLabel: String,
        ariaCurrentLabel: String
    },
    computed: {
        rootClasses() {
            return [
                this.order,
                this.size,
                {
                    'is-simple': this.simple,
                    'is-rounded': this.rounded
                }
            ]
        },

        /**
        * Total page size (count).
        */
        pageCount() {
            return Math.ceil(this.total / this.perPage)
        },

        /**
        * First item of the page (count).
        */
        firstItem() {
            const firstItem = this.current * this.perPage - this.perPage + 1
            return firstItem >= 0 ? firstItem : 0
        },

        /**
        * Check if previous button is available.
        */
        hasPrev() {
            return this.current > 1
        },

        /**
        * Check if first page button should be visible.
        */
        hasFirst() {
            return this.current >= 3
        },

        /**
        * Check if first ellipsis should be visible.
        */
        hasFirstEllipsis() {
            return this.current >= 4
        },

        /**
        * Check if last page button should be visible.
        */
        hasLast() {
            return this.current <= this.pageCount - 2
        },

        /**
        * Check if last ellipsis should be visible.
        */
        hasLastEllipsis() {
            return this.current < this.pageCount - 2 && this.current <= this.pageCount - 3
        },

        /**
        * Check if next button is available.
        */
        hasNext() {
            return this.current < this.pageCount
        },

        /**
        * Get near pages, 1 before and 1 after the current.
        * Also add the click event to the array.
        */
        pagesInRange() {
            if (this.simple) return

            const left = Math.max(1, this.current - 1)
            const right = Math.min(this.current + 1, this.pageCount)

            const pages = []
            for (let i = left; i <= right; i++) {
                pages.push({
                    number: i,
                    isCurrent: this.current === i,
                    click: (event) => {
                        if (this.current === i) return
                        this.$emit('change', i)
                        this.$emit('update:current', i)

                        // Set focus on element to keep tab order
                        this.$nextTick(() => event.target.focus())
                    }
                })
            }
            return pages
        }
    },
    watch: {
        /**
        * If current page is trying to be greater than page count, set to last.
        */
        pageCount(value) {
            if (this.current > value) this.last()
        }
    },
    methods: {
        /**
        * Previous button click listener.
        */
        prev() {
            if (!this.hasPrev) return
            this.$emit('change', this.current - 1)
            this.$emit('update:current', this.current - 1)
        },

        /**
        * First button click listener.
        */
        first() {
            this.$emit('change', 1)
            this.$emit('update:current', 1)
        },

        /**
        * Last button click listener.
        */
        last() {
            this.$emit('change', this.pageCount)
            this.$emit('update:current', this.pageCount)
        },

        /**
        * Next button click listener.
        */
        next() {
            if (!this.hasNext) return
            this.$emit('change', this.current + 1)
            this.$emit('update:current', this.current + 1)
        },

        /**
        * Get text for aria-label according to page number.
        */
        getAriaPageLabel(pageNumber, isCurrent) {
            if (this.ariaPageLabel && (!isCurrent || !this.ariaCurrentLabel)) {
                return this.ariaPageLabel + ' ' + pageNumber + '.'
            } else if (this.ariaPageLabel && isCurrent && this.ariaCurrentLabel) {
                return this.ariaCurrentLabel + ', ' + this.ariaPageLabel + ' ' + pageNumber + '.'
            }
            return null
        }
    }
}
</script>

<style lang="scss">
.pagination {
    .pagination-next,
    .pagination-previous {
        padding-left: 0.25em;
        padding-right: 0.25em;
        &.is-disabled {
            pointer-events: none;
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
    &.is-simple {
        justify-content: normal;
        &.is-centered {
            justify-content: center;
        }
        &.is-right {
            justify-content: flex-end;
        }
    }
    .is-current {
        pointer-events: none;
        cursor: not-allowed;
    }
}

.pagination-link,
.pagination-previous,
.pagination-next {
	margin: 0 2px !important;
	font-size: 13px !important;
	line-height: 28px !important;
}
</style>
