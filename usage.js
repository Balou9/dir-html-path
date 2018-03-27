var dirHtmlPath = require('./index.js')

dirHtmlPath(process.cwd(), function(err, data) {
  if (err) throw err
  console.log(data)
})
