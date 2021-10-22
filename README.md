
[![npm version](https://badge.fury.io/js/lit-html-promise.svg)](https://badge.fury.io/js/lit-html-promise)
[![Downloads](https://img.shields.io/npm/dm/lit-html-promise.svg)](https://www.npmjs.com/package/lit-html-promise)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/SacDeNoeuds)

# `lit-html-promise`

![Logo](./docs/favicon-16x16.png) `lit-html` directive to map a promise

## Installation

### Via NPM

```bash
npm install --save-dev lit-html-promise
```

### Via CDN

As ESM:
```js
import { promise } from '//unpkg.com/lit-html-promise@^1?module'
import { promise } from '//cdn.skypack.dev/lit-html-promise@^1'

// When jsdelivr esm support is stable, you can also use jsdelivr:
import { promise } from '//cdn.jsdelivr.net/npm/lit-html-promise@^1/+esm'
```

## Usage

This directive can be used for any (relevant) template part, like attributes or child.

### With mapper object

#### Signature

```ts
promise<T>(
  thePromise: Promise<T> | undefined | null,
  mappers: {
    idle?: () => any, // occurs when thePromise is falsy
    pending?: (previousValue: T | undefined) => any,
    fulfilled?: (value: T) => any,
    rejected?: (error: Error) => any,
  },
)
```

#### Example

```js
import { html, render } from 'lit-html'
import { promise } from 'lit-html-promise'

const renderPost = (post?: Promise<Post>) => html`
  <div style="position: relative">
    <div
      class="overlay"
      ?hidden=${promise(post, {
        pending: () => false,
        idle: () => true,
        fulfilled: () => true,
        rejected: () => true,
      })}
    ></div>
    <div>
      ${promise(post, {
        idle: () => html`Idle…`,
        pending: (previousPost) => html`Pending…`,
        fulfilled: (post) => html`Fulfilled! ${post.id} − ${post.title}`,
        rejected: (error) => html`Something went wrong: ${error.message}`,
      })}
    </div>
  </div>
`
```

### With mapper function

#### Signature

```ts
promise<T>(
  thePromise: Promise<T> | undefined | null,
  mapper: (asyncValue: AsyncValue<T>) => any,
)
type AsyncValue<T> =
  | { state: 'idle' } // occurs when thePromise is falsy
  | { state: 'pending', value: T | undefined /* previous value if any */ }
  | { state: 'fulfilled', value: T }
  | { state: 'rejected', error: Error }
```

#### Example

```js
import { html, render } from 'lit-html'
import { promise } from 'lit-html-promise'

const renderPost = (post?: Promise<Post>) => html`
  <div style="position: relative">
    <div
      class="overlay"
      ?hidden=${promise(post, (async) => async.state !== 'pending')}
    ></div>
    <div>
      ${promise(post, (async) => {
        switch (async.state) {
          case 'idle': // async = { state: 'idle' }
            return html`Idle…`
          case 'pending': // async = { state: 'pending', value: previousValue | undefined }
            return html`Pending…`
          case 'fulfilled': // async = { state: 'fulfilled', value: post }
            return html`Fulfilled! ${async.value.id} − ${async.value.title}`
          case 'rejected': // async = { state: 'rejected', error }
            return html`Something went wrong: ${async.error.message}`
        }
      })}
    </div>
  </div>
`
```
