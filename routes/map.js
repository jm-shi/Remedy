/*
 * map.js
 * Renders the map page.
 */

exports.view = (req, res) => {
  res.render('map', {
    title: 'Map'
  });
};
