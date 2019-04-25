## Metabox component

Meta boxes are handy, flexible, modular edit screen elements that can be used to collect information.

## Configuration

| Name     	| description                               	| supported values 	| value type 	|
|----------	|-------------------------------------------	|------------------	|------------	|
| title    	| metabox title                             	|                  	| string     	|
| closable 	| whether the metabox can be toggled or not 	| true, false      	| boolean    	|

## Example usage

**Note**: metaboxes must be wrapped inside a div with the id "poststuff".

##### Normal metabox

```js
<div id="poststuff">
	<wp-metabox title="Metabox title">
		<p>Content of the metabox goes here.</p>
	</wp-metabox>
</div>
```

##### Metabox that can be closed

```js
<div id="poststuff">
	<wp-metabox title="Metabox title" closable>
		<p>Content of the metabox goes here.</p>
	</wp-metabox>
</div>
```

##### Trigger an event when closed

```js
<div id="poststuff">
	<WPMetabox title="Toggle me" closable @metaboxToggle="doSomething()">
		<p>Content of the metabox goes here.</p>
	</WPMetabox>
</div>
```

##### Footer slot

```js
<div id="poststuff">
	<WPMetabox title="Toggle me" closable>
		<p>Content of the metabox goes here.</p>
		<template v-slot:metabox-footer>
			<p>Metabox footer</p>
		</template>
	</WPMetabox>
</div>
```
