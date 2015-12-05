// node components
var http = require('http');
var fs = require('fs');
var url = require('url');

// proprietary components
var logger = require('./logger.js');
var zombify = require('./translateZombify.js');
var unzombify = require('./translateUnzombify.js');

// Create a server
var handleRequest = function (request, response) {

    // Parse the request containing file name
    var wantParameters = true;
    var purl = url.parse(request.url, wantParameters);

   if ( purl.pathname === '/' ) {
       response.writeHead(200, {'Content-Type':'text/html'});

       var file = fs.createReadStream('index.html');

       // main route of chunks from read stream to the write stream
       file.pipe( response );

       file.on('finished', function(){
           response.end();
       });
   } else if (purl.pathname === '/zombify') {

       var src = purl.query.src;
       if ( src ) {

           if ( src.length > 1000 ) {
               response.writeHead(414);
               response.end('parameter too long');
           } else {
               response.writeHead(200, {'Content-Type':'text/html'});
               response.end(src);
           }

       } else {

           response.writeHead(200, {'Content-Type':'text/html'});
           response.end('No source text found.');

       }

   } else if (purl.pathname === '/unzombify') {

       var src = purl.query.src;
       if ( src ) {

           if ( src.length > 1000 ) {
               response.writeHead(414);
               response.end('parameter too long');
           } else {
               response.writeHead(200, {'Content-Type':'text/html'});
               response.end(src);
           }

       } else {

           response.writeHead(200, {'Content-Type':'text/html'});
           response.end('No source text found.');

       }


   } else {
       response.writeHead(404);
       response.end('File not found.');

   }

   logger( request, response );

};

var server = http.createServer( handleRequest );

server.listen(7000, function(){
    console.log("listening on 7000");
});
