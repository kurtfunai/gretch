# Gretch

This is a npm package to fetch information from api.gretch.io

### Installation

```sh
yarn add gretch
```

or

```sh
npm install gretch
```

### Compatibility
This package is written in ES2015 and includes a babel transpiled ES5 version of the library under `/lib`.

It makes use of both `fetch` and `promises`, but makes no assumptions and leaves the [polyfills](https://github.com/kurtfunai/gretch#polyfills) up to you (suggestions below)!

### Usage
In this example we fetch the data for one of my favourite songs by Shakey Graves.
```javascript
import Gretch from "gretch"
// or var Gretch = require('gretch')
let url = 'https://www.youtube.com/watch?v=sD72LbIk02M'
let gretch = new Gretch('secret_key')
gretch.fetch(url)
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Output
{
  "oembed": {
    "type": "video",
    "url": "https://www.youtube.com/watch?v=sD72LbIk02M",
    "provider_url": "https://www.youtube.com/",
    "provider_name": "YouTube",
    "title": "Shakey Graves - Roll the Bones - Audiotree Live",
    "width": 480,
    "height": 270,
    "thumbnail_url": "https://i.ytimg.com/vi/sD72LbIk02M/hqdefault.jpg",
    "thumbnail_width": 480,
    "thumbnail_height": 360,
    "author_name": "Audiotreetv",
    "author_url": "https://www.youtube.com/user/Audiotreetv",
    "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/sD72LbIk02M?feature=oembed\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>"
  },
  "page": {
    "type": "video",
    "url": "https://www.youtube.com/watch?v=sD72LbIk02M",
    "title": "Shakey Graves - Roll the Bones - Audiotree Live",
    "description": "Shakey Graves performs \"Roll the Bones\" on Audiotree Live, June 20, 2013. iTunes: http://apple.co/1KHpMUt Spotify: http://bit.ly/1LCAVAO Google Play: http://...",
    "determiner": "",
    "site_name": "YouTube",
    "locale": "",
    "locales_alternate": null,
    "images": [
      {
        "url": "https://i.ytimg.com/vi/sD72LbIk02M/maxresdefault.jpg",
        "secure_url": "",
        "type": "",
        "width": 0,
        "height": 0
      }
    ],
    "audios": null,
    "videos": null
  }
}
```

### Errors

Example of HTTP error when passing invalid URL
```javascript
gretch.fetch('')
  .then(data => console.log(data))
  .catch(err => console.log(err))
// MyApp.js:2 Error: [Gretch] Unprocessable Entity
```

### Polyfills

#### Browser suggestions
- [Fetch compatibility](https://caniuse.com/#search=fetch)
  - fetch https://github.com/github/fetch
  - cross-fetch (nodejs compatible) https://github.com/lquixada/cross-fetch
  - isomorphic-fetch (nodejs compatible)https://github.com/matthew-andrews/isomorphic-fetch
- [Promise compatibility](https://caniuse.com/#search=promise)
  - es6-promise https://github.com/stefanpenner/es6-promise
  - promise-polyfill https://github.com/taylorhakes/promise-polyfill

#### Node.js
- Fetch polyfills
  - node-fetch https://www.npmjs.com/package/node-fetch

### Contributing

Gretch is written in ES6 and thusly requires running the source through babel before publishing on npm.

```
yarn compile
```