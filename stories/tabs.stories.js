/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import {
	WPTabs,
	WPTabItem
} from '../src/components/wp-tabs'

import readme from '../src/components/wp-tabs/readme.md'

storiesOf('Tabs', module)
	.add('Tabs example', () => ({
		components: {
			WPTabs,
			WPTabItem,
		},
		template:
		`
		<div>
			<WPTabs>
				<WPTabItem label="First tab">
					<p>First tab content</p>
				</WPTabItem>
				<WPTabItem label="Second Tab">
					<p>Second tab content</p>
				</WPTabItem>
			</WPTabs>
		</div>
		`,
	}), {
		notes: readme
	})
	;

/* eslint-enable react/react-in-jsx-scope */
