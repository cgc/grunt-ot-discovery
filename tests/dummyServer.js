var http = require("http"),
    fs = require("fs"),
    otDiscovery = {
        'announce': {
          "announcementId": "10e9276b-a2a2-4d5f-971e-fa530b718acb",
          "staticAnnouncement":false,
          "announceTime":"2014-11-17T10:35:55.306Z",
          "serviceType":"myservice",
          "serviceUri":"http://127.0.0.1:8888",
          "metadata":{}
        },
        'unannounce': {}
    };

var server = http.createServer(function(request, response) {

    if(request.url === '/kill'){
        response.end();
        process.exit(0);
    }

    var bits = request.url.split('/');

    if(bits[1] === 'borked'){
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.write('<html><body><h1>Ohes noes it r teh borked</h1></body></html>');
      response.end();
      return;
    }

    var result = otDiscovery[bits[2]];

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(result));
    response.end();
}).listen(8888);
