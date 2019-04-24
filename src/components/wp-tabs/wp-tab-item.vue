<template>
    <div v-show="isActive" class="tab-item">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'wp-tab-item',
        props: {
            label: String
        },
        data() {
            return {
                isActive: false,
            }
        },
        methods: {
            /**
             * Activate tab based on the index.
             */
            activate(oldIndex, index) {
                this.isActive = true
            },

            /**
             * Deactivate tab based on the index.
             */
            deactivate(oldIndex, index) {
                this.isActive = false
            }
        },
        created() {
            if (!this.$parent.$data._isTabs) {
                this.$destroy()
                throw new Error('You should wrap WPTabItem on a WPTabs')
            }

            this.$parent.tabItems.push(this)
        },
        beforeDestroy() {
            const index = this.$parent.tabItems.indexOf(this)
            if (index >= 0) {
                this.$parent.tabItems.splice(index, 1)
            }
        }
    }
</script>
