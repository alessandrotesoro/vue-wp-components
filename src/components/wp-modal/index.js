import Vue from 'vue'
import WPModal from './wp-modal'

export default WPModal

/*
import { use, registerComponent, registerComponentProgrammatic } from '../../utils/plugins'

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

export default Plugin

export {
    WPModal,
    WPModalProgrammatic
}
*/
