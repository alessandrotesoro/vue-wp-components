/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';

import WPSpinner from '../src/components/wp-spinner';

import readme from '../src/components/wp-spinner/readme.md'

storiesOf('Spinner', module)
	.add('Show spinner', () => ({
		components: {
			WPSpinner
		},
		template: '<WPSpinner/>',
	}), {
		notes: readme
	});

/* eslint-enable react/react-in-jsx-scope */
