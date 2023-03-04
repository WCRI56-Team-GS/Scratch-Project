const cookieController = {};
/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  console.log('running cookieController.setCookie');
  res.cookie('secret', Math.floor(Math.random() * 100).toString(), { secure: true, httpOnly: true});

  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  console.log('running cookieController.setSSIDCookie');

  res.cookie('ssid', res.locals.user._id.toString(), { secure: true, httpOnly: true });
  return next();
}

module.exports = cookieController;