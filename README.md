# Gretch

This is a npm package to fetch information from api.gretch.io

### Usage
In this example we fetch the data for one of my favourite songs by Shakey Graves.
```javascript
let url = 'https://www.youtube.com/watch?v=sD72LbIk02M'
let gretch = new Gretch('secret_key')
gretch.fetch(url)
  .then((data) => console.log(data))
  .catch(err => console.log(err))

// Result
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
  .then((data) => console.log(data))
  .catch(err => console.log(err))
// MyApp.js:2 Error: [Gretch] Unprocessable Entity
```

### Contributing

Gretch is written in ES6 and thusly requires running the source through babel before publishing on npm.

```
yarn compile
```