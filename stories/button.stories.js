/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPButton from '../src/components/wp-button';

storiesOf('Button', module)
	.add('Primary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton type="primary">Primary Button</WPButton>',
	}))
	.add('Secondary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton>Secondary Button</WPButton>',
	}))
	.add('Hero secondary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton hero>Hero secondary button</WPButton>',
	}))
	.add('Hero primary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton hero type="primary">Hero primary button</WPButton>',
	}))
	.add('Click event', () => ({
		components: {
			WPButton
		},
		template: '<WPButton @click="action">Click me</WPButton>',
		methods: {
			action: action('clicked')
		},
	}));

/* eslint-enable react/react-in-jsx-scope */
