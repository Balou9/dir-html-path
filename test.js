var tape = require('tape')
var dirHtmlPath = require('./index.js')
var dir = process.cwd()

tape('Output is', function (t) {
    dirHtmlPath(dir, function (err, data) {
      if (err) throw err
      t.ok(typeof data, 'object', 'is an object')
      t.end()
    })
  }
)
