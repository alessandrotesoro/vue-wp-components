/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPMetabox from '../src/components/wp-metabox';

storiesOf('Metaboxes', module)
	.add('Expanded metabox', () => ({
		components: {
			WPMetabox
		},
		template: `
			<div id="poststuff" style="padding:50px;">
				<WPMetabox title="Metabox title">
					<p>Content of the metabox goes here.</p>
				</WPMetabox>
			</div>`,
	}))
	.add('Toggle metabox', () => ({
		components: {
			WPMetabox
		},
		template: `
			<div id="poststuff" style="padding:50px;">
				<WPMetabox title="Toggle me" closable @metaboxToggle="action">
					<p>Content of the metabox goes here.</p>
				</WPMetabox>
			</div>`,
		methods: {
			action: action('Metabox toggled')
		},
	}))
	.add('Footer slot', () => ({
		components: {
			WPMetabox
		},
		template: `
			<div id="poststuff" style="padding:50px;">
				<WPMetabox title="Toggle me" closable @metaboxToggle="action">
					<p>Content of the metabox goes here.</p>

					<template v-slot:metabox-footer>
						<p>Metabox footer</p>
					</template>
				</WPMetabox>
			</div>`,
		methods: {
			action: action('Metabox toggled')
		},
	}));

/* eslint-enable react/react-in-jsx-scope */
