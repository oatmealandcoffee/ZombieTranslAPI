module.exports.sentenceCase = function ( str ) {

    var components = str.match( /[^\.!\?]+[\.!\?]+/g );
    // no match
    if ( !components ) {
        return str;
    }
    // check each of the components for sentence tokens
    var lastComponent = components.length;
    for ( var c = 0 ; c < lastComponent ; c++ ) {
        var tgt = components[c];
        tgt = tgt.trim();
        // if component ends with [.?!] then capitalize first letter
        var lastChr = tgt.charAt(tgt.length);
        if ( tgt.match( /[\.\?\!]/g ) ) {
            var s = tgt.charAt(0).toUpperCase() + tgt.substring(1);
            components[c] = s;
        }
    }
    // join the array with '\s' and return
    var result = components.join(' ');
    return result;

};
