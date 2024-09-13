const jwt = require("jsonwebtoken");

const ensureAuthentication = (req, res, next) => {
  if ((!req.headers, "authorization")) {
    return res.status(403).json({ message: "Token is required" });
  }
  try {
    const deCoded = jwt.verify(
      req.headers("authorization").process_params.env.SECRET
    );
    next();
  } catch (error) {
    return status(403).json({
      message: "Token is not vaild, or it's is expired",
    });
  }
};

module.exports = {
  ensureAuthentication
}