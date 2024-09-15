const jwt = require("jsonwebtoken");
const secretKey = "test"; // Replace with your own secret key

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (token == null) return res.sendStatus(401); // Unauthorized
  console.log("verifying Token");
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    console.log("token verified");
    req.user = user; // Attach user information to request object
    next(); // Pass control to the next middleware or route handler
  });
}

const ensureAuthentication = (req, res, next) => {
  if (!req.headers === "authorization") {
    return res.status(403).json({ message: "Token is required" });
  }
  try {
    jwt.verify(req.headers("authorization").process_params.env.SECRET);
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: "Token is not vaild, or it's is expired",
      error: error,
    });
  }
};

module.exports = {
  ensureAuthentication,
  authenticateToken,
};
