# fj-cond

[![Build Status](https://travis-ci.org/fp-js/fj-cond.svg)](https://travis-ci.org/fp-js/fj-cond) [![npm version](https://badge.fury.io/js/fj-cond.svg)](http://badge.fury.io/js/fj-cond)
> Call the first function whichs condition is true.

## Installation

`npm install fj-cond --save`

## Usage

```js
var cond = require('fj-cond');

let eq = (x) => (y) => x === y;

cond([
    [eq(1), assert.fail],
    [eq(2), assert.fail],
    [eq(3), (x) => console.log(x)],
    [T, assert.fail]
])(3));
```
