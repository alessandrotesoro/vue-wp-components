## Admin notice component

The notice component displays a message with the same styling of the WordPress administration notices. The only difference, is that the component can be used wherever you want within your layout, you're not forced to display the notice underneath the page title as you would do with regular admin notices.

### Configuration

| Name        	| description                                                         	| supported values              	| value type 	|
|-------------	|---------------------------------------------------------------------	|-------------------------------	|------------	|
| type        	| Defines the type of notice to display                               	| success, info, warning, error 	| String     	|
| dismissible 	| Determines if the notice can be dismissed or not                    	| true, false                   	| Boolean    	|
| alternative 	| When enabled, it uses an alternative "soft" styling for the notices 	| true, false                   	| Boolean    	|

### Example usage

##### Regular notice

```js
<wp-notice type="warning">Warning message goes here</wp-notice>
```

##### Dismissible notice

```js
<wp-notice type="warning" dismissible>Warning message goes here</wp-notice>
```

##### Alternative notice styling

```js
<wp-notice type="warning" dismissible alternative>Warning message goes here</wp-notice>
```

##### Trigger event on dismiss

```js
<wp-notice type="success" dismissible @on-close="action()">Message goes here</wp-notice>
```
