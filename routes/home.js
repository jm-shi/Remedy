/*
 * help.js
 * Renders the home page.
 */

exports.view = (req, res) => {
  res.render('home', {
    title: 'Home',
    name: 'Guest'
  });
};
