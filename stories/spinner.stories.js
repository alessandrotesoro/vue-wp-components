/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';

import WPSpinner from '../src/components/wp-spinner';

storiesOf('Spinner', module)
	.add('Show spinner', () => ({
		components: {
			WPSpinner
		},
		template: '<WPSpinner/>',
	}));

/* eslint-enable react/react-in-jsx-scope */
