var sentenceCase = require('./sentenceCase.js');
var tokens = require('./translateTokens.js');
var translate = require('./translate.js');

module.exports.unzombify = function ( en ) {

    // init values
     var str = zb;
     var dir = false;

     // get the keys in order
     var keys = Object.keys( tokens );
     keys.sort();

     // execute translation
     var lastKey = keys.length - 1;
     for ( var thisKey = lastKey; thisKey >= 0; thisKey-- ) {
         var key = keys[ thisKey ];
         var tokens = tokens[ key ];
         str = translate( str, tokens, dir );
     }
     str = sentenceCase( str );
     return str;

};
