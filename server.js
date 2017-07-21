var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
if (page == '/') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('You\'re at the reception desk. How can I help you?');
}
else if (page == '/basement') {
res.write('You\'re in the wine cellar. These bottles are mine!');
}
else {
    res.writeHead(404);

res.write('Hey, this page is not found');
}
res.end();
});
server.listen(8080);