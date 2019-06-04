/*
 * help.js
 * Renders the help page.
 */

exports.view = function(req, res) {
  res.render('help', {
    title: 'Help'
  });
};
