# @kengres/config
useful functions, sass mixins and other reusable code for my projects
## how to use
### css
``` scss
// in your root scss file import the index.scss from node_modules
@import '@kengres/config/lib/css/index.scss';
```

### javascript functions
1. ```groupBy()``` -  receives and array of objects and the property to group by
``` js
// examples
const arr = [
  { name: 'Alan', city: 'Berlin' age: 22 },
  { name: 'Bikovkiy', city: 'Moscow' age: 22 },
  { name: 'Maria', city: 'Moscow' age: 22 },
  { name: 'Alan', city: 'Berlin' age: 22 }
];
const grouped = groupBy(arr, 'city'); // property must be a string

// output
{
  Moscow: [
    { name: 'Bikovkiy', city: 'Moscow' age: 22 },
    { name: 'Maria', city: 'Moscow' age: 22 }
  ],
  Berlin: [
    { name: 'Alan', city: 'Berlin' age: 22 },
    { name: 'Alan', city: 'Berlin' age: 22 }
  ]
}
```