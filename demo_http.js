var http = require('http');

http.createServer(function (req, res) {
  res.writeHead('hello world');
  
  res.end();
}).listen(8080);