const User = require("../models/userModel");
const path = require("path");

const userController = {};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;

  // ERROR HANDLING
  if (!username || !password) {
    console.log(
      "Error in userController.verifyUser: username and password must be provided"
    );
    return next("username and password must be provided");
  }

  // check if req.body.username matches a username in the database

  User.findOne({ username: username })
    .exec()
    .then((user) => {
      if (!user || password !== user.password) {
        console.log("no password match");
        return res.redirect("/signup");
      }
      // valid user
      else {
        console.log("user: ", user);
        console.log("res.locals: ", res.locals);
        res.locals.user = user;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: "Express error handler caught unknown middleware error",
        status: 500,
        message: { err: "An error occurred" + err },
      })
  });

};

module.exports = userController;
