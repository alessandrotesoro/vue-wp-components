/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPPagination from '../src/components/wp-pagination';

storiesOf('Pagination', module)
	.add('Pagination example', () => ({
		components: {
			WPPagination
		},
		data() {
			return {
				total: 200,
                current: 1,
                perPage: 20,
                order: '',
                size: '',
                isSimple: false,
                isRounded: false
			}
		},
		template:
		`
		<div>
			<WPPagination
				:total="total"
				:current.sync="current"
				:order="order"
				:size="size"
				:simple="isSimple"
				:rounded="isRounded"
				:per-page="perPage"
				aria-next-label="Next page"
				aria-previous-label="Previous page"
				aria-page-label="Page"
				aria-current-label="Current page">
			</WPPagination>
		</div>
		`,
	}))
	;

/* eslint-enable react/react-in-jsx-scope */
