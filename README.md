<h1 align="center">nyaasi-api</h1>

This is an api allowing one to:
* gather torrents directly from [nyaa.si](https://nyaa.si) in about a second or less.
* check a user's profile and torrents.
* So many things you should check the wiki to understand better.

Any contribution is welcomed.

# Install
```
npm install --save nyaasi-api
```

# Use
nyaasi-api is organised with `nyaasi` methods.
You can access either of them like so:
```javascript
const { nyaasi } = require('nyaasi-api')

console.log(si)
/**
 * [Si] methods:
 *   > list
 *   > search
 *   > searchAll
 *   > searchPage
 *   > searchByUser
 *   > searchAllByUser
 *   > searchByUserAndByPage
 *   > infoRequest
 *   > upload
 * 
 */
```