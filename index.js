var dirHtmlList = require('dir-html-list')
var getAbsPath = require('get-abs-path')

function dirHtmlPath (dir, callback) {

  dirHtmlList(dir, function (err, data) {
    if (err) return callback(err)
    var fullPaths = getAbsPath(dir, data)

    function reducer (acc, cur, index) {
      acc[data[index]] = cur
      return acc
    }

    callback(null, fullPaths.reduce(reducer, {}))
  })
}

module.exports = dirHtmlPath
