// node components
var http = require('http');
var fs = require('fs');
var url = require('url');

// proprietary components
var logger = require('./logger.js');

// Create a server
var server = http.createServer( function (request, response) {

   // Parse the request containing file name
   var purl = url.parse(request.url).pathname;

   if ( purl === '/' ) {
       response.writeHead(200, {'Content-Type':'text/html'});

       var file = fs.createReadStream('index.html');

       // main route of chunks from read stream to the write stream
       file.pipe( response );

       file.on('finished', function(){
           response.end();
       });

   } else {
       response.writeHead(404);
       response.end('File not found.');
   }

   logger( request, response );

});

server.listen(7000, function(){
    console.log("listening on 7000");
});
