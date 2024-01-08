// console.log("Server Started again");
//Hot Reload --> reloading automatically.
//npm i nodemon --save-dev --> '--save-dev' This is known as 'save dev flag'.
//Server --> Server is something which process request and send a response if applicable.
//HTTP --> is a protocal, and proctocal is set of rule. So HTTP is HyperText Transfer Protocal. So it is a set of rule that tell us how hypertext is transferd between server.
//Host --> The address where our server will accessible(e.g. localhost)
//port --> The port of the machine where the server application is running.

const http = require("http");
const currencyData = require("./currencies.json");

const serverInfo = {
  serverName: "Crio Server",
  version: "1.0.0",
  date: new Date().toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }),
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Currency Database</h1>");
  } else if (request.url === "/status") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(serverInfo));
  } else if (request.url === "/currencies") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(currencyData.data));
  } else {
    const reqParam = request.url.split("/");
    console.log(reqParam);
    if (reqParam[1] === "currencies" && reqParam[2]) {
      const result = currencyData.data.filter(
        (item) => item.id === reqParam[2].toUpperCase()
      );
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(result));
    } else {
      response.writeHead(404);
    }
  }
  response.end();
});

server.listen(8080, () => {
  console.log("Listening at 8080...");
});
