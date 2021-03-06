import {
	configure
} from '@storybook/vue';
import './assets/css/wp-admin.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
	document.body.className += ' ' + 'wp-admin wp-core-ui admin-color-fresh js'
}

configure(loadStories, module);
