const { User } = require("../models");
const Helper = require("../helpers/helper");
const JWT = require("../helpers/jwt");

class Users {
  static async createUser(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.create({
        username,
        password
      });

      res.status(201).json({
        code: 201,
        data: {
          id: user.id,
          username: user.username
        },
      });
    } catch (err) {
      console.error(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });

      if (user) {
        const login = Helper.userLogin(password, user.password);
        const payload = { id: user.id, username: user.username };
        const access_token = JWT.convertPayload(payload);

        if (login)
          res.status(200).json({
            code: 200,
            message: "Login Successful",
            access_token,
            user: { id: user.id, username: user.username },
          });
        else {
          throw {
            code: 401,
            name: "Unauthorize",
            message: "Invalid Input Email or Password!",
          };
        }
      } else {
        throw {
          code: 401,
          name: "Unauthorize",
          message: "Invalid Input Email or Password!!",
        };
      }
    } catch (err) {
      if (err.name === 'Unauthorize') {
        res.status(err.code).json(err)
      } else {
        console.error(err)
      }
    }
  }
}

module.exports = Users;
