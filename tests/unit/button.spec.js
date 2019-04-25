import { shallowMount } from '@vue/test-utils'
import WPButton from '@/components/wp-button/wp-button.vue'

describe( 'WPButton', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPButton)
        expect(wrapper.name()).toBe('wp-button')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    it('emit a click event', () => {
        const wrapper = shallowMount(WPButton)
        const click = jest.fn()
        wrapper.vm.$on('click', click)
        wrapper.find('.button').trigger('click')
        expect(click).toHaveBeenCalledTimes(1)
	})
	it('should be primary button', () => {
        const wrapper = shallowMount(WPButton, {
            propsData: {
                type: 'primary'
            }
        })
        expect(wrapper.classes()).toContain('button-primary')
	})
	it('should be secondary button', () => {
        const wrapper = shallowMount(WPButton, {
            propsData: {
                type: 'secondary'
            }
        })
        expect(wrapper.classes()).toContain('button-secondary')
    })
    it('should be hero button', () => {
        const wrapper = shallowMount(WPButton, {
            propsData: {
                hero: true
            }
        })
        expect(wrapper.classes()).toContain('button-hero')
    })
})
