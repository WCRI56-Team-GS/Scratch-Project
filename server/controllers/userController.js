const User = require('../models/userModel');
const path = require('path');

const userController = {};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  console.log('running userController.verifyUser');
  
  const { username, password } = req.body

  // ERROR HANDLING
  if (!username || !password) {
    console.log('Error in userController.verifyUser: username and password must be provided');
    return next('username and password must be provided');
  }
  
  // check if req.body.username matches a username in the database
  User.findOne({ username }, (err, user) => {
    // database error
    if (err) return next('Error in userController.verifyUser: ' + JSON.stringify(err));

    // no user was found OR passwords do not match
    else if (!user || password !== user.password) return res.redirect('/signup');

    // valid user
    else {
      res.locals.user = user;
      return next();
    }  
  });
};

module.exports = userController;
