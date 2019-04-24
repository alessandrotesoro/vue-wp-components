import WPButton from './components/wp-button'
import WPSpinner from './components/wp-spinner'

const components = {
	WPButton,
	WPSpinner,
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
