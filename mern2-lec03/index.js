// Authentication is checking if the user is who he is saying. If "manas" will try to login, Authentication will check if I'm really "manas" or not.(FaceBook login) --> is Identity
// Authorization is checking if I have the permision to do something.(Ckecking my DMs, it will allow. Trying to access someone else private DMs) --> is permission

// Why authentication happens before authorization?
// Authentication and authorization are two processes that work together to control access to protected resources. Authentication is the process of verifying the identity of a user, while authorization is the process of determining what a user is allowed to do. Authentication happens before authorization because the system needs to know who the user is before granting or denying access to the resources. For example, when you log in to a website, you first enter your username and password (authentication), and then the website checks what permissions you have (authorization).

// echo $PATH --> to check the path of environment variable.

require("dotenv").config();
/*
require("dotenv") --> is importing 'dotenv' library. 
config() --> When this function is called, 'dotenv' will serach for '.env' file and, will check the key value pair 'ROUTE_PASSWORD=LetMeIn' and put it to the environment. 
*/

const express = require("express");
const app = express();
const PORT = 8082;

const currencyRoutes = require("./routes/currencies.routes");

const usersRoutes = require("./routes/users.route");

app.get("/", (req, res) => {
  res.send("<h1>currency Database</h1>");
});

app.use("/currencies", currencyRoutes);

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
