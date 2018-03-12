# create-epic-test

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/create-epic-test.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/create-epic-test.svg?branch=master)](https://travis-ci.org/akameco/create-epic-test)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> create epic test

## Install

```
$ yarn add --dev create-epic-test
```

## Usage

```js
const { createEpicTest } = require('create-epic-test')

const successTest = createEpicTest(epic, {
  API: {
    getUser: () => Observable.of({ data: { name: 'キズナアイ' } }),
    getUsers: () =>
      Observable.of({
        data: [{ name: 'のじゃロリ' }, { name: 'キズナアイ' }],
      }),
  },
})

successTest('APIが成功したとき、FETCH_USER_SUCCESSを発行する', {
  input$: '--a',
  expect$: '--b',
  values: {
    a: { type: 'FETCH_USER_REQUEST' },
    b: { type: 'FETCH_USER_SUCCESS', payload: { name: 'キズナアイ' } },
  },
})

successTest('APIが成功したとき、FETCH_USERS_SUCCESSを発行する', {
  input$: '--a',
  expect$: '--b',
  values: {
    a: { type: 'FETCH_USERS_REQUEST' },
    b: {
      type: 'FETCH_USERS_SUCCESS',
      payload: [{ name: 'のじゃロリ' }, { name: 'キズナアイ' }],
    },
  },
})
```

## API

### `createEpicTest(epic, dependencies)`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/create-epic-test/commits?author=akameco "Code") [📖](https://github.com/akameco/create-epic-test/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/create-epic-test/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
