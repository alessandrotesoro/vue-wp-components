/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPModal from '../src/components/wp-modal';
import WPButton from '../src/components/wp-button';

storiesOf('Modal', module)
	.add('Simple modal', () => ({
		components: {
			WPButton,
			WPModal
		},
		data() {
			return {
				isModalActive: false
			}
		},
		template:
		`
		<div style="padding:30px">

			<WPButton @click="isModalActive = true">Open modal</WPButton>

			<WPModal :active.sync="isModalActive" title="Modal title" @close="action">
				This is the content of the modal.
			</WPModal>

		</div>
		`,
		methods: {
			action: action('Modal closed')
		},
	}))
	.add('Footer button', () => ({
		components: {
			WPButton,
			WPModal
		},
		data() {
			return {
				isModalActive: false
			}
		},
		template:
		`
		<div style="padding:30px">

			<WPButton @click="isModalActive = true">Open modal</WPButton>

			<WPModal :active.sync="isModalActive" title="Modal title">
				This is the content of the modal.

				<template v-slot:modal-footer-right>
					<WPButton class="media-button" type="primary" @click="action">Example button</WPButton>
				</template>
			</WPModal>

		</div>
		`,
		methods: {
			action: action('clicked')
		},
	}))
	.add( 'Footer with 2 buttons', () => ({
		components: {
			WPButton,
			WPModal
		},
		data() {
			return {
				isModalActive: false
			}
		},
		template:
		`
		<div style="padding:30px">

			<WPButton @click="isModalActive = true">Open modal</WPButton>

			<WPModal :active.sync="isModalActive" title="Modal title">
				This is the content of the modal.

				<template v-slot:modal-footer-left>
					<WPButton class="media-button" @click="action2">Another button</WPButton>
				</template>
				<template v-slot:modal-footer-right>
					<WPButton class="media-button" type="primary" @click="action">Example button</WPButton>
				</template>
			</WPModal>

		</div>
		`,
		methods: {
			action: action('Primary button clicked'),
			action2: action('Secondary button clicked')
		},
	}));

/* eslint-enable react/react-in-jsx-scope */
