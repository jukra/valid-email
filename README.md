#valid-email

[![Build Status](https://travis-ci.org/jukra/valid-email.svg?branch=master)](https://travis-ci.org/jukra/valid-email)
[![Coverage Status](https://coveralls.io/repos/jukra/valid-email/badge.png?branch=master)](https://coveralls.io/r/jukra/valid-email?branch=master)

##Validate Email Addresses w/o pure regular expressions.
Regular expression validation is often useful, but also often inaccurate.
Sometimes it's just better to do it manually



## Example

```js
    console.log(require('valid-email')('john@iamjohnhenry.com'))//#true
    console.log(require('valid-email')('iamjohnhenry.com'))//#false
```
