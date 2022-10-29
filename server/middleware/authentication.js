const JWT = require("../helpers/jwt");
const { User } = require("../models");

const loginMiddleware = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = JWT.convertToken(access_token);

    const user = await User.findByPk(payload.id);

    if (!user) {
      throw {
        code: 401,
        name: "Unauthorize",
        message: "Invalid Token or User.",
      };
    }

    req.currentLogin = {
      id: user.id,
      username: user.username
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = loginMiddleware;
