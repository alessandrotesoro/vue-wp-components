import WPButton from './components/wp-button'
import WPSpinner from './components/wp-spinner'
import WPNotice from './components/wp-spinner'
import WPMetabox from './components/wp-metabox'
import {
	WPTabs,
	WPTabItem
} from './components/wp-tabs'

const components = {
	WPButton,
	WPSpinner,
	WPNotice,
	WPMetabox,
	WPTabItem,
	WPTabs,
}

components.install = (Vue, options = {}) => {
	for (const componentName in components) {
		const component = components[componentName]
		if (component && componentName !== 'install') {
			Vue.component(component.name, component)
		}
	}
}

export default components
