/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import WPPageHeader from '../src/components/wp-page-header';

storiesOf('Page header', module)
	.add('Example', () => ({
		components: {
			WPPageHeader,
		},
		data() {
			return {
				links: [
					{
						title: 'test',
						url: 'https://docs.posterno.com/'
					}
				],
			}
		},
		template:
		`
		<div>
			<WPPageHeader :links="links">
				Title of the page goes here
			</WPPageHeader>
		</div>
		`,
	}))
	;

/* eslint-enable react/react-in-jsx-scope */
