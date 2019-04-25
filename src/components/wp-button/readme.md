## Button component

The classic button, in sizes, and states.

### Configuration

| Prop 	| support values     	| value type 	|
|------	|--------------------	|------------	|
| type 	| primary, secondary 	| string     	|
| hero 	| true, false        	| bool       	|

### Basic usage

```js
<wp-button type="primary">Button label</wp-button>
```

### Trigger an action

```js
<wp-button @click="doSomething()">Button label</wp-button>
```


