/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPButton from '../src/components/wp-button';
import readme from '../src/components/wp-button/readme.md'

storiesOf('Button', module)
	.add('Primary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton type="primary">Primary Button</WPButton>',
	}), {
		notes: readme,
	})
	.add('Secondary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton>Secondary Button</WPButton>',
	}), {
		notes: readme,
	})
	.add('Hero secondary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton hero>Hero secondary button</WPButton>',
	}), {
		notes: readme,
	})
	.add('Hero primary button', () => ({
		components: {
			WPButton
		},
		template: '<WPButton hero type="primary">Hero primary button</WPButton>',
	}), {
		notes: readme,
	})
	.add('Click event', () => ({
		components: {
			WPButton
		},
		template: '<WPButton @click="action">Click me</WPButton>',
		methods: {
			action: action('clicked')
		},
	}), {
		notes: readme,
	});

/* eslint-enable react/react-in-jsx-scope */
