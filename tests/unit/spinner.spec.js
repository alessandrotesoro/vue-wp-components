import { shallowMount } from '@vue/test-utils'
import WPSpinner from '@/components/wp-spinner/wp-spinner.vue'

describe( 'WPSpinner', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPSpinner)
        expect(wrapper.name()).toBe('wp-spinner')
        expect(wrapper.isVueInstance()).toBeTruthy()
	})
	it('should be spinning', () => {
        const wrapper = shallowMount(WPSpinner)
        expect(wrapper.classes()).toContain('is-active')
	})
})
