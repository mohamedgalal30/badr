const url = require('url')
const fs = require('fs')

exports.get = function(req, res) {
   req.requrl = url.parse(req.url, true)  // url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
   let path = req.requrl.pathname
   if(/.(css|js)$/.test(path)){
      // serve assets (css & js)
      res.writeHead(200, {
         "Content-Type": "text/"+getFileExtension(path)
      })
      fs.readFile(__dirname + path, 'utf8', function(err, data) {
         if(err) throw err
         res.write(data, 'utf8')
         res.end()
      })
   } else {
      if(path == "/" || path == "/home"){
         require('./controllers/home').get(req, res)
      } else {
         require('./controllers/404').get(req, res)
      }
   }
}

function getFileExtension(filename) {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}