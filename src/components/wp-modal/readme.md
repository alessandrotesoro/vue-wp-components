## Modal component

The modal component uses the same layout as the "Add media" dialogs in WordPress.

### Configuration

| Name   	| description                                                                       	| supported values 	| value type     	|
|--------	|-----------------------------------------------------------------------------------	|------------------	|----------------	|
| active 	| Whether modal is active or not, use the .sync modifier to make it two-way binding 	| true, false      	| boolean        	|
| width  	| Width of the Modal                                                                	| String, Number   	| String, Number 	|

### Basic usage

##### Simple modal

```js
<template>
    <section>
		<wp-button @click="isModalActive = true">Open modal</wp-button>

		<wp-modal :active.sync="isModalActive" title="Modal title">
			This is the content of the modal.
		</wp-modal>
    </section>
</template>
```

##### Modal with footer buttons

```js
<template>
    <section>
		<wp-button @click="isModalActive = true">Open modal</wp-button>

		<wp-modal :active.sync="isModalActive" title="Modal title">
			This is the content of the modal.

			<template v-slot:modal-footer-left>
				<wp-button class="media-button" @click="action2">Another button</wp-button>
			</template>
			<template v-slot:modal-footer-right>
				<wp-button class="media-button" type="primary" @click="action">Example button</wp-button>
			</template>
		</wp-modal>
    </section>
</template>
```
