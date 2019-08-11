const model = require("./model");
const jwt = require("jsonwebtoken");
const config = require("../../config");
module.exports = {
  //login route
  login: (req, res) => {
    model
      .findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res
            .status(404)
            .send({ msg: "That email has not been used to create an account" });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            let token = jwt.sign({ user }, config.secret, {
              expiresIn: 86400
            });
            res.status(200).send({
              token,
              user: {
                name: `${user.forename} ${user.surname}`
              }
            });
          } else {
            res.status(403).send({ msg: "wrong password" });
          }
        });
      })
      .catch(err => res.status(500).send());
  },
  //register route
  register: (req, res) => {
    let newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password
    });
    newUser
      .save()
      .then(user => {
        console.log(user);
        const token = jwt.sign({ user }, config.secret, {
          expiresIn: 86400
        });
        res.status(200).send({
          token,
          user: {
            name: `${user.forename} ${user.surname}`
          }
        });
      })
      .catch(err => {
        console.log(err);

        res.status(500).send({ msg: "Register unsuccessful" });
      });
  }
};
