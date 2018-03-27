# dir-html-path

[![build status](http://img.shields.io/travis/Balou9/dir-html-path.svg?style=flat)](https://travis-ci.org/Balou9/dir-html-path) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/dir-html-path?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/dir-html-path)

Get absolute path of html files in given directory


***

## Get it!

```
npm install --save dir-html-path
```

***

## Usage

``` js
var dirHtmlPath = require('dir-html-path')

dirHtmlPath(process.cwd(), function(err, data) {
  if (err) throw err
  console.log(data)
})
```
***

## API

### `dirHtmlPath(dir, callback)`

***

## License

[MIT](./license.md)

***
