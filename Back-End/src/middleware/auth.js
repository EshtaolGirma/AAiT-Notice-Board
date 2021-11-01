const jwt = require("jsonwebtoken");
const TOKEN_KEY = "thisisthesecretkey";

const verifyToken = (req, res, next) => {
  // const token =
  //   req.body.token || req.query.token || req.headers["x-access-token"];
  const authHeader = req.headers["authorization"];
  const token1 = authHeader.split(" ")["1"];
  const token = req.body.token || req.query.token || token1;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.student = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
