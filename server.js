let http_ip = '127.0.0.1'
let http_port = 8899
let http = require('http')


let server = http.createServer(function(req, res) {
	res.end(req.url)
})
server.listen(http_port, http_ip)
console.log('Badr is running on http://' + http_ip + ":" + http_port)
