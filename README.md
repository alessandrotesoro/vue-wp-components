# Vue WordPress Components
[![Netlify Status](https://api.netlify.com/api/v1/badges/69ba79ad-05f8-4e72-b531-3d400b29cb7d/deploy-status)](https://app.netlify.com/sites/vue-wordpress-components/deploys)

Vue WordPress components is a simple, lightweight Vue.js UI Toolkit that integrates with the WordPress dashboard to build admin pages. 

This is an opinionanted set of components that I use in the majority of my WordPress projects, therefore it made sense to merge the components into a library.

## Installation

Install Vue WordPress Components through npm or yarn

```
```

Import or require Vue and Vue WordPress components in your code:

```
import Vue from 'vue'
import VueWPComponents from 'vue-wordpress-components'
import 'vue-wordpress-components/dist/vue-wordpress-components.min.css'

Vue.use(VueWPComponents)
```

## Demo and Documentation

[https://vue-wordpress-components.netlify.com/](https://vue-wordpress-components.netlify.com/)

## Development setup

##### Install dependencies
```
yarn install
```

##### Use storybook.js for preview
```
yarn storybook
```

##### Compiles and hot-reloads for development
```
yarn run serve
```

##### Compiles and minifies for production
```
yarn run build
```

##### Lints and fixes files
```
yarn run lint
```

##### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
