// var http = require('http');
//
// var server = http.createServer(function (req, res) {
//   res.statusCode = 404;
//   res.setHeader('Content-type', 'text/html');
//   res.end('<h1>Hello World</h1> <p>hows everyone doing?</p>');
// });
//
// server.listen(8000, function () {
//   console.log('server listening on port 8000...');
// });

// var url = require('url');
// console.log(url.parse('http://www.example.com:80/path?query#fragment'));

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    if (err) {
      throw err;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'index.html');
    res.end(data);
  });
});

server.listen(8000, function () {
  console.log('hello');
});
