const jwt = require("jsonwebtoken");
const isAuthenticated =
  (role = []) =>
  (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) return next("User Unauthorized");
      const decode = jwt.verify(authorization, process.env.JWT_SECRET);

      if (!decode) return next("User Unauthorized");
      if (!role.includes(decode?.data?.role)) {
        return next("User Unauthorized");
      }

      req.user = decode?.data._id;
      req.role = decode?.data.role;
      next();
    } catch (error) {
      error.status = 401;
      next(error);
    }
  };
module.exports = isAuthenticated;
