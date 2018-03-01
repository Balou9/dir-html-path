var tape = require('tape')
var dirHtmlPath = require('./index.js')

tape('Reducer is', function (t) {
  dirHtmlPath(process.cwd(), function (err, data) {
    if (err) throw err
    t.ok(typeof data), 'array')
    t.end()
  })
})
