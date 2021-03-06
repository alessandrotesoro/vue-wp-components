/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPNotice from '../src/components/wp-notice';

import readme from '../src/components/wp-notice/readme.md';

storiesOf('Notice', module)
	.add('Success notice', () => ({
		components: {
			WPNotice
		},
		template: '<WPNotice>Success message goes here</WPNotice>',
	}), {
		notes: readme
	})
	.add('Info notice', () => ({
		components: {
			WPNotice
		},
		template: '<WPNotice type="info">Info message goes here</WPNotice>',
	}), {
		notes: readme
	})
	.add('Warning notice', () => ({
		components: {
			WPNotice
		},
		template: '<WPNotice type="warning">Warning message goes here</WPNotice>',
	}), {
		notes: readme
	})
	.add('Error notice', () => ({
		components: {
			WPNotice
		},
		template: '<WPNotice type="error">Warning message goes here</WPNotice>',
	}), {
		notes: readme
	})
	.add('Alternative Style', () => ({
		components: {
			WPNotice
		},
		template: `
		<div style="background:#fff; padding:30px;">
			<WPNotice type="success" alternative>Message goes here</WPNotice>
			<WPNotice type="info" alternative>Message goes here</WPNotice>
			<WPNotice type="warning" alternative>Message goes here</WPNotice>
			<WPNotice type="error" alternative>Message goes here</WPNotice>
		</div>`,
	}), {
		notes: readme
	})
	.add('Dismissible notice', () => ({
		components: {
			WPNotice
		},
		template: '<WPNotice type="success" dismissible @on-close="action">Message goes here</WPNotice>',
		methods: {
			action: action('Notice dismissed')
		},
	}), {
		notes: readme
	});

/* eslint-enable react/react-in-jsx-scope */
