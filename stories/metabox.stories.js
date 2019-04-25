/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPMetabox from '../src/components/wp-metabox';

import readme from '../src/components/wp-metabox/readme.md'

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
	}), {
		notes: readme
	})
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
	}), {
		notes: readme
	})
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
	}), {
		notes: readme
	});

/* eslint-enable react/react-in-jsx-scope */
