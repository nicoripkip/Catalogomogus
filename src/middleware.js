module.exports = function (request, response, next) {
    console.log("Min Middleware virker");

    next();
}
