var fs = require('fs')
var dirHtmlList = require('dir-html-list')

// of course undefined fix it
// What's wrong mr reducer? How to reference incoming arrays?

function reducer (array) {
   array.reduce(function (acc, cur, index) {
   acc[index] = cur
   return acc
  }, {})
}

function dirHtmlPath(dir, callback){
  dirHtmlList(dir, function (err, data) {
    if (err) return callback(err)
    callback(null, reducer(data))
    })
}

module.exports = dirHtmlPath

// module.exports = reducer
// function dirHtmlPath
// module.exports = dirHtmlList
