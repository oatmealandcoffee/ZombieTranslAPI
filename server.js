// node components
var http = require('http');
var fs = require('fs');
var url = require('url');

// proprietary components
var logger = require('./logger.js');
var translate = require('./translateMain.js').translate;

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
   } else if (purl.pathname === '/zombify' || purl.pathname === '/unzombify' ) {

       var result = translate( purl );

       response.writeHead( result.status , {'Content-Type':'text/html'} );

       if ( result.text ) {
           response.end( result.text + '' );
       } else {
           response.end( result.message + '' );
       }

   } else {

       response.writeHead(404, {'Content-Type':'text/html'});
       response.end('File not found.');

   }

   logger( request, response );

};

var server = http.createServer( handleRequest );

server.listen(7000, function(){
    console.log("listening on 7000");
});
