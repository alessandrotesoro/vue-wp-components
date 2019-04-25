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
<template>
    <section>
        <wp-button @click="clickMe()">Click Me</wp-button>
    </section>
</template>

<script>
    export default {
        methods: {
            clickMe() {
                console.log('doing something')
            }
        }
    }
</script>

```


