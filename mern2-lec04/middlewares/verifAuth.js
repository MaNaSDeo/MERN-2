const password = process.env.ROUTE_PASSWORD;
//The next callback is from the previous middleware.
const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ message: "Unauthorized Request" });
  }
  if (authorization !== password) {
    return res.status(403).json({ message: "Unauthorized Request" });
  }
  next(); //passes the request to the next object in line
};

module.exports = { verifyAuth };
