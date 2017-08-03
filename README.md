
<h1 align="center">obj-to-routes</h1>
<div align="center">
  <strong>Convert object to array of URL routes with associated value</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/obj-to-routes">
    <img src="https://img.shields.io/npm/v/obj-to-routes.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/obj-to-routes">
  <img src="https://img.shields.io/npm/dm/obj-to-routes.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/obj-to-routes">
    <img src="https://img.shields.io/travis/tiaanduplessis/obj-to-routes.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/obj-to-routes/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/obj-to-routes.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/obj-to-routes/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/obj-to-routes.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/obj-to-routes/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/obj-to-routes.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20obj-to-routes!%20https://github.com/tiaanduplessis/obj-to-routes%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/obj-to-routes.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/obj-to-routes/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install obj-to-routes
# OR
$ yarn add obj-to-routes
```

## Usage

```js
const objToRoutes = require('obj-to-routes')

const data = {
  posts: {
    foo: {
      message: 'hello'
    }
  },
  other: 'foo',
  baz: [1,2,3],
  food: {
    steal: {
      healthy: true
    }
  }
}

console.log(objToRoutes(data))
// [ { path: '/',
//     value: { posts: [Object], other: 'foo', baz: [Array], food: [Object] } },
//   { path: '/posts', value: { foo: [Object] } },
//   { path: '/posts/foo', value: { message: 'hello' } },
//   { path: '/posts/foo/message', value: 'hello' },
//   { path: '/other', value: 'foo' },
//   { path: '/baz', value: [ 1, 2, 3 ] },
//   { path: '/food', value: { steal: [Object] } },
//   { path: '/food/steal', value: { healthy: true } },
//   { path: '/food/steal/healthy', value: true } ]

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/obj-to-routes/issues).

## License

Licensed under the MIT License.
