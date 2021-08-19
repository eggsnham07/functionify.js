# Verify.js

### Usage:
```javascript
const functionify = require("functionify.js")

function somefunction(var1, var2) {
    functionify({
        vars: [var1, var2],
        type: ["number", "string"]
    })
}

somefunction("123", 456)
//Output:
//TypeError: Expected a number, got a string
```

In the example above `var1` must be a `number` and `var2` must be a `string`, otherwise a TypeError is thrown when the function is executed.

`types` can contain:
- boolean
- string
- number
- function
- bigint
- object
- symbol