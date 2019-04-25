import { shallowMount } from '@vue/test-utils'
import WPModal from '@/components/wp-modal'

describe( 'WPModal', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPModal)
        expect(wrapper.name()).toBe('wp-modal')
        expect(wrapper.isVueInstance()).toBeTruthy()
	})
})
