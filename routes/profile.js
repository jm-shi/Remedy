/*
 * profile.js
 * Renders the profile page.
 */

exports.view = (req, res) => {
  res.render('profile', {
    title: 'Profile'
  });
};
