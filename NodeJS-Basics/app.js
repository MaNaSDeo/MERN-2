// File: app.js

const http = require("http");

const port = 8081;

http
  .createServer((request, response) => {
    // Set response status code and response headers

    response.writeHead(200, { "Content-Type": "text/html" });

    // Set response body i.e, data to be sent

    response.write("<h1>TODO</h1>");

    // Tell the server the response is complete and to close the connection

    response.end();
  })
  .listen(port, () => {
    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`);
  });
