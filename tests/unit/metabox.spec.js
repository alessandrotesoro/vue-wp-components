import { shallowMount } from '@vue/test-utils'
import WPMetabox from '@/components/wp-metabox/wp-metabox.vue'

describe( 'WPMetabox', () => {
    it('is called', () => {
        const wrapper = shallowMount(WPMetabox)
        expect(wrapper.name()).toBe('wp-metabox')
        expect(wrapper.isVueInstance()).toBeTruthy()
	})
	it('should render title assigned to the metabox', () => {
        const wrapper = shallowMount(WPMetabox, {
            propsData: {
                title: 'My title'
            }
        })
        expect(wrapper.find("h2 span").text()).toBe('My title')
	})
	it('should display toggle icon when enabled', () => {
        const wrapper = shallowMount(WPMetabox, {
            propsData: {
                closable: true
            }
        })
        expect(wrapper.find(".handlediv").isVisible()).toBe(true)
	})
	it('should close metabox when toggle button is clicked', () => {
        const wrapper = shallowMount(WPMetabox, {
            propsData: {
                closable: true
            }
		})

		const click = jest.fn()
        wrapper.vm.$on('click', click)
		wrapper.find('button').trigger('click')

        expect(wrapper.classes()).toContain('closed')
	})
})
