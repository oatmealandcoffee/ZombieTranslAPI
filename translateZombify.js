var sentenceCase = require('./sentenceCase.js');
var tokens = require('./translateTokens.js');
var translate = require('./translate.js');

module.exports.zombify = function ( en ) {

    // init values
     var str = en;
     var dir = true;

     // get the keys in order
     var keys = Object.keys( tokens );
     keys.sort();

     // execute translation
     var lastKey = keys.length;
     for ( var thisKey = 0; thisKey < lastKey; thisKey++ ) {
         var key = keys[ thisKey ];
         var tokens = tokens[ key ];
         str = translate( str, tokens, dir );
     }
     str = sentenceCase( str );
     return str;

};
