import { shallowMount } from '@vue/test-utils'
import { WPTabs, WPTabItem } from '@/components/wp-tabs'

describe( 'WPTabs', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPTabs)
        expect(wrapper.name()).toBe('wp-tabs')
        expect(wrapper.isVueInstance()).toBeTruthy()
	})
})
