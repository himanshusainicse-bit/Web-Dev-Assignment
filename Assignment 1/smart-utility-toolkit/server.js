// server.js
// basic http server with multiple routes
// run: node server.js
// visit: http://localhost:3000

var http = require("http");

var server = http.createServer(function(req, res) {

    console.log("Request came for:", req.url);

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Node Server</h1>");

    } else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");

    } else if (req.url == "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact Page</h1>");

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }

});

server.listen(3000, function() {
    console.log("Server is running on port 3000");
    console.log("Open: http://localhost:3000");
});
