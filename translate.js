module.exports.translate = function ( str, tokens, dir ) {

    // init to OC_E2Z
    var search = tokens.enr;
    var replace = tokens.zb;

    if ( dir === false ) {
        search = tokens.zbr;
        replace = tokens.en;
    }
    // execute translation
    var result = str.replace(search, replace);
    return result;

};
