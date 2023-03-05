const Session = require("../models/sessionModel");

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  console.log("running sessionControlled.isLoggedIn");
  // get SSID from cookie on request
  console.log("ssid cookie_id: ", req.cookies.ssid);

  // query the DB for a matching cookieID in the session document
  // Session.findOne({ cookieId: req.cookies.ssid })
  //   .then((data) => {
  //     console.log('query returned: ', data)
  //     // if there is a match - LOGGED IN - return next();
  //     return next();
  //   })
  //   // if no match, redirect or something.  FAIL.
  //   .catch((err) => {
  //     return next({
  //       log: "error in sessionController.isLoggedIn",
  //       message: { err: "sessionController.isLoggedIn" + err },
  //     });
  //   });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  console.log("running sessionController.startSession");
  console.log("user: ", res.locals.user);
  Session.create({ cookieId: res.locals.user._id.toString() })
    .then((data) => {
      console.log("created new session: ", data);
      return next();
    })
    .catch((err) => {
      return next({
        log: "error in sessionController.startSession",
        message: { err: "sessionController.startSession" + err },
      });
    });
};

module.exports = sessionController;
