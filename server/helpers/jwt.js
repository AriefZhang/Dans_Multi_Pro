const jwt = require("jsonwebtoken");
const SECRET_KEY = "RAHASIA_TEST_DANS_MULTI_PRO";

class JWT {
  static convertPayload(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "4h" });
  }

  static convertToken(access_token) {
    return jwt.verify(access_token, SECRET_KEY);
  }
}

module.exports = JWT;
