# Ramda DOM Utilities

[![Maintainability](https://api.codeclimate.com/v1/badges/09d6cd7166295e953d9b/maintainability)](https://codeclimate.com/github/winston0410/ramda-dom-utilities/maintainability) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/0177a95320534809b107fa55ca567cf6)](https://www.codacy.com/manual/winston0410/ramda-dom-utilities?utm_source=github.com&utm_medium=referral&utm_content=winston0410/ramda-dom-utilities&utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/ramda-dom-utilities/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/ramda-dom-utilities?targetFile=package.json) [![Test Coverage](https://api.codeclimate.com/v1/badges/09d6cd7166295e953d9b/test_coverage)](https://codeclimate.com/github/winston0410/ramda-dom-utilities/test_coverage)

A collection of curried DOM manipulation functions, created with the help of [Ramda](https://ramdajs.com/).

```javascript
//Instead of writing this

const element = document.getElementById('test-id')
element.textContent = 'Hello world'
element.id = 'new-id'
element.classList.add('foo')

//Write this: Compact and reusable

const element = R.pipe(
  getElementById('test-id'),
  setProp('textContent')('Hello world'),
  setProp('id')('new-id'),
  addClass('foo')
)(document)
```

## Installation

```bash
npm i ramda-dom-utilities
```

Then in the script where you want to use this library:

```javascript
import * as R from 'ramda-dom-utilities'
```

## Features

- All functions in this library return the mutated element, so that you can easily use them in a pipe

- All functions in this library are curried, so that you can easily reuse them

- For API functions that return **undefined**, the **element being used as data** (after mutated by the API) will be returned

### List of curried functions

We try to keep the name of the curried function identical with the Web API, and have the same parameter orders, except you would put the element that uses the API functions to the very end, so as to follow Ramda's "data-last" pattern.

```javascript
//Web API

element.setAttribute('id', 'test-id')

//Curried version provided by this library

setAttribute('id')('test-id')(element)
```

- [x] **addClass**

- [x] **containsClass**

- [x] **removeClass**

- [x] **setAttribute**

- [x] **removeAttribute**

- [x] **hasAttribute**

- [x] **before**

- [x] **after**

- [x] **append**

- [x] **prepend**

- [x] **remove**

- [x] **replaceWith**

- [x] **getElementById**

- [x] **getElementsByClassName**

- [x] **querySelector**

- [x] **querySelectorAll**

- [x] **addEventListener**

- [x] **removeEventListener**

- [x] **matches**

Other than these curried Web API version, we provide the following functions to help you put DOM manipulation in a pipe

**R.setProp**

```javascript
element.textContent = 'Hello world'
element.id = 'test-id'

//Can be directly translated to:

R.pipe(
  setProp('textContent')('Hello world'),
  setProp('id')('test-id')
)(element)
```

## How to contribute?

- Use [gitmoji](https://github.com/carloscuesta/gitmoji) to write commit message

- TODO
