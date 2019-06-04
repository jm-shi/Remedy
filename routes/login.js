/*
 * login.js
 * Renders the login page.
 */

exports.view = (req, res) => {
  res.render('login', {
    title: 'Login'
  });
};
