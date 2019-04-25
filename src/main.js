import WPButton from './components/wp-button'
import WPSpinner from './components/wp-spinner'
import WPNotice from './components/wp-spinner'
import WPMetabox from './components/wp-metabox'
import WPModal from './components/wp-modal'

import {
	WPTabs,
	WPTabItem
} from './components/wp-tabs'

import { use, registerComponent, registerComponentProgrammatic } from './utils/plugins'

const components = {
	WPButton,
	WPSpinner,
	WPNotice,
	WPMetabox,
	WPTabItem,
	WPTabs,
	WPModal,
}

components.install = (Vue, options = {}) => {
	for (const componentName in components) {
		const component = components[componentName]
		if (component && componentName !== 'install') {
			Vue.component(component.name, component)
		}
	}
}

const WPModalProgrammatic = {
    open(params) {
        let content
        let parent
        if (typeof params === 'string') content = params

        const defaultParam = {
            programmatic: true,
            content
        }
        if (params.parent) {
            parent = params.parent
            delete params.parent
        }
        const propsData = Object.assign(defaultParam, params)

        const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
        const WPModalComponent = vm.extend(WPModal)
        return new WPModalComponent({
            parent,
            el: document.createElement('div'),
            propsData
        })
    }
}

const Plugin = {
    install(Vue) {
        registerComponent(Vue, WPModal)
        registerComponentProgrammatic(Vue, '$WPModal', WPModalProgrammatic)
    }
}

use(Plugin)

export default components
