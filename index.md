---
title: hibp
---

<a href="https://wkovacs64.github.io/hibp">
  <img
    alt="logo"
    title="logo"
    src="https://wkovacs64.github.io/hibp/logo.png"
    align="right"
    width="85"
  />
</a>

## Installation

Locally via yarn:

```shell
yarn add hibp
```

Or, npm:

```shell
npm install --save hibp
```

Browser via CDN (see [below](#using-in-the-browser) for more information):

```html
<script src="https://unpkg.com/hibp@5.2.5"></script>
```

## Features

* Get a single breach event
* Get all breaches for an account
* Get all breach events in the system
* Get all data classes
* Get all pastes for an account
* Check a password to see if it has been exposed in a data breach
* Search for an account in both breaches and pastes at the same time
* All queries return a Promise
* Available server-side (Node.js) and client-side (browser)

## Usage

##### ECMAScript module syntax:

```javascript
// import individual modules as needed
import { dataClasses, search } from 'hibp';
// or, import all modules into a local namespace
import * as hibp from 'hibp';
```

##### CommonJS module syntax:

```javascript
// require individual modules as needed
const { dataClasses, search } = require('hibp');
// or, require all modules into a local namespace
const hibp = require('hibp');
```

The following modules are available:

* [breach](https://github.com/wKovacs64/hibp/tree/master/API.md#breach)
* [breachedAccount](https://github.com/wKovacs64/hibp/tree/master/API.md#breachedaccount)
* [breaches](https://github.com/wKovacs64/hibp/tree/master/API.md#breaches)
* [dataClasses](https://github.com/wKovacs64/hibp/tree/master/API.md#dataclasses)
* [pasteAccount](https://github.com/wKovacs64/hibp/tree/master/API.md#pasteaccount)
* [pwnedPassword](https://github.com/wKovacs64/hibp/tree/master/API.md#pwnedpassword)
* [search](https://github.com/wKovacs64/hibp/tree/master/API.md#search)

Please see the
[API reference](https://github.com/wKovacs64/hibp/tree/master/API.md) for more
detailed usage information and examples.

#### Quick-Start Example

```javascript
import { search } from 'hibp';

search('someAccountOrEmail')
  .then(data => {
    if (data.breaches || data.pastes) {
      // Bummer...
      console.log(data);
    } else {
      // Phew! We're clear.
      console.log('Good news — no pwnage found!');
    }
  })
  .catch(err => {
    // Something went wrong.
    console.log(err.message);
  });
```

#### Using in the browser

There is a Universal Module Definition (UMD) build provided in the package
`dist` directory for usage in the browser. When using this build, an `hibp`
object will be added to the browser's `window` object.

The recommended way to include the UMD build (when using a `<script>` tag) is to
use the [unpkg][unpkg] CDN, specifying the exact version you want. If you don't
specify a version, the `latest` tag will be used, which could be dangerous
if/when there are breaking changes made to the API. See [unpkg][unpkg] for
details and advanced version specification, but generally you will want to do
the following (replacing `x.y.z` with the version you want):

```html
<script src="https://unpkg.com/hibp@x.y.z"></script>
```

Development and production (minified) UMD builds are also provided for manual
download if desired:

* [https://unpkg.com/hibp/dist/hibp.js][cdn-dev]
* [https://unpkg.com/hibp/dist/hibp.min.js][cdn-prod]

Alternatively, you may bundle it in with client-side code using a module bundler
like [webpack][webpack]. If your build process honors the `module` field in
`package.json`, you can import the ECMAScript module as described
[above](#usage). Otherwise, the `main` field resolves to the CommonJS module
version.

**N.B.** This module requires a Promise implementation to exist in the global
namespace prior to being loaded. Therefore, to facilitate usage in [browsers
without native Promise support][caniuse-promise], you are responsible for
providing a polyfill. I recommend [es6-promise][es6-promise].

## Try It Out

[Test hibp in your browser with RunKit.][runkit]

## Projects Using hibp

* [pwned][pwned] - a command-line tool for querying the '[Have I been
  pwned?][haveibeenpwned]' service
* [hibp-stdlib][hibp-stdlib] - a microservice on [StdLib][stdlib]

Send me a [PR][pulls] or an email and I'll add yours to the list.

## License

This module is distributed under the [MIT License][license].

[troy]: http://www.troyhunt.com
[haveibeenpwned]: https://haveibeenpwned.com
[unpkg]: https://unpkg.com
[cdn-dev]: https://unpkg.com/hibp/dist/hibp.js
[cdn-prod]: https://unpkg.com/hibp/dist/hibp.min.js
[webpack]: https://webpack.github.io
[caniuse-promise]: http://caniuse.com/#search=promise
[es6-promise]: https://github.com/stefanpenner/es6-promise
[runkit]: https://runkit.com/npm/hibp
[pwned]: https://github.com/wKovacs64/pwned
[pulls]: https://github.com/wKovacs64/hibp/pulls
[hibp-stdlib]: https://stdlib.com/services/wKovacs64/hibp
[stdlib]: https://stdlib.com
[license]: https://github.com/wKovacs64/hibp/tree/master/LICENSE.txt
