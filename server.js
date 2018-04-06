var http = require('http');

http.createServer( function(req, res) {
    consolge.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Code from WebApp</h1>');
}).listen(process.env.PORT);

