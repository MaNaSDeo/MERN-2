const password = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ message: "Unauthorized Request" });
  }
  if (authorization !== password) {
    return res.status(403).json({ message: "Unauthorized Request" });
  }
  next();
};

module.exports = { verifyAuth };
