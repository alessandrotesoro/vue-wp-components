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
				<p class="image is-4by3">
					<img src="https://via.placeholder.com/550">
				</p>
			</WPModal>

		</div>
		`,
	}));

/* eslint-enable react/react-in-jsx-scope */
