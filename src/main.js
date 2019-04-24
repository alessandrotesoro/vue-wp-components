import WPButton from './components/wp-button'

const components = {
	WPButton,
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