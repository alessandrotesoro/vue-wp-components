<template>
    <div class="wp-tabs">
        <h2 class="nav-tab-wrapper">
            <a
                v-for="(tabItem, index) in tabItems"
                :key="index"
                :class="[ 'nav-tab', { ' nav-tab-active': newValue === index, 'is-disabled': tabItem.disabled }]"
                @click="tabClick(index)"
                href="javascript:void(0)"
                >
                {{ tabItem.label }}
            </a>
        </h2>
        <section class="tab-content">
            <slot/>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'wp-tabs',
        props: {
            value: [String, Number],
        },
        data() {
            return {
                newValue: this.value || 0,
                tabItems: [],
                _isTabs: true // Used internally by TabItem
            }
        },
        watch: {
            /**
             * When v-model is changed set the new active tab.
             */
            value(value) {
                this.changeTab(this.newValue, value)
                this.newValue = value
            },

            /**
             * When tab-items are updated, set active one.
             */
            tabItems() {
                if (this.tabItems.length) {
                    this.tabItems[this.newValue].isActive = true
                }
            }
        },
        methods: {
            /**
             * Change the active tab.
             */
            changeTab(oldIndex, newIndex) {
                if (oldIndex === newIndex) return

                this.tabItems[oldIndex].deactivate(oldIndex, newIndex)
                this.tabItems[newIndex].activate(oldIndex, newIndex)
            },

            /**
             * Tab click listener, emit events and set new active tab.
             */
            tabClick(value) {
                this.$emit('input', value)
                this.$emit('change', value)
                this.changeTab(this.newValue, value)
                this.newValue = value
            }
        },
        mounted() {
            if (this.tabItems.length) {
                this.tabItems[this.newValue].isActive = true
            }
        }
    }
</script>
