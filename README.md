# array-min

Get minimum value of collection.

[![NPM](https://nodei.co/npm/arraymin.png)](https://nodei.co/npm/arraymin)

# Install

```bash
npm install arraymin
```

```bash
bower install array-min
```

# Usage

```javascript
var min = require('arraymin');

console.log(min([])); // Infinity
console.log(min([2,1,3])); //  1

var col = [{n:2}, {n:1}, {n:3}];

var result = min(col, function(x) {
  return x.n;
});

console.log(result); // {n:1}

console.log(min(col, 'n')); // {n:1}
```

# License

MIT
