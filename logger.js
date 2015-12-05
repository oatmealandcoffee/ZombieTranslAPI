module.exports = function (request, response) {
    var date = new Date();
    var statusCode = response.statusCode;
    var url = request.url;
    // use bracket notation for properties with a dash
    var userAgent = request.headers['user-agent'];

    console.log(date + ' ' + url + ' ' + statusCode + ' ' + userAgent );
};
