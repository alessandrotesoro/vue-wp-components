import { shallowMount } from '@vue/test-utils'
import WPNotice from '@/components/wp-notice/wp-notice.vue'

describe( 'WPNotice', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPNotice)
        expect(wrapper.name()).toBe('wp-notice')
        expect(wrapper.isVueInstance()).toBeTruthy()
	})
	it('should be success notice', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
                type: 'success'
            }
        })
        expect(wrapper.classes()).toContain('notice-success')
	})
	it('should be info notice', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
                type: 'info'
            }
        })
        expect(wrapper.classes()).toContain('notice-info')
	})
	it('should be warning notice', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
                type: 'warning'
            }
        })
        expect(wrapper.classes()).toContain('notice-warning')
	})
	it('should be error notice', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
                type: 'error'
            }
        })
        expect(wrapper.classes()).toContain('notice-error')
	})
	it('should display alternative notice style', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
				type: 'error',
				alternative: true,
            }
        })
        expect(wrapper.classes()).toContain('is-alt')
	})
	it('should be dismissible', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
				type: 'error',
				dismissible: true,
            }
        })
		expect(wrapper.classes()).toContain('is-dismissible')
		expect(wrapper.find(".notice-dismiss").isVisible()).toBe(true)
	})
	it('should hide the notice when dismissed', () => {
        const wrapper = shallowMount(WPNotice, {
            propsData: {
				type: 'error',
				dismissible: true,
            }
        })

		wrapper.find('button').trigger('click')

		expect(wrapper.find('button').exists()).toBe(false)

	})
})
