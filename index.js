var dirHtmlList = require('dir-html-list')
var dir = process.cwd()

var reducer = function(acc, cur, index){
  acc[cur] = cur
  return acc
}

dirHtmlList(dir, function (err, data) {
  if (err) throw err
  console.log(data.reduce(reducer, {}))
})
