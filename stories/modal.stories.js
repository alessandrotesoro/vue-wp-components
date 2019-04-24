/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';

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

			<WPModal :active.sync="isModalActive">
				test modal content
			</WPModal>

		</div>
		`,
	}));

/* eslint-enable react/react-in-jsx-scope */
