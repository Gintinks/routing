const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      request.url = "index.html"
      break;
    case "/about":
      request.url = "about.html"
      break;
    case "/contact":
      request.url = "contact.html"
      break;
    case "/help":
      request.url = "help.html"
      break;
    case "/inquiry":
      request.url = "inquiry.html"
      break;

    default:
      break;
  }


  fs.readFile('./' + request.url, function (err, data) {

    if (!err) {
      var dotoffset = request.url.lastIndexOf('.');
      var mimetype = dotoffset == -1
        ? 'text/plain'
        : {
          '.html': 'text/html',
          '.ico': 'image/x-icon',
          '.jpg': 'image/jpeg',
          '.png': 'image/png',
          '.gif': 'image/gif',
          '.css': 'text/css',
          '.js': 'text/javascript'
        }[request.url.substr(dotoffset)];
      response.setHeader('Content-type', mimetype);
      response.end(data);
      console.log(request.url, mimetype);
    } else {
      console.log('file not found: ' + request.url);
      response.writeHead(404, "Not Found");
      response.end();
    }
  });
});

server.listen(3000, function () {
  console.log("Server listening on port 3000");
});   