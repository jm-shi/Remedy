/*
 * map.js
 * Converts user-entered addresses into geodata.
 * Used to help display the specified location on the map.
 */

const fetch = require('node-fetch');

// When user enters a city into the search bar of the map age, convert the input into
// geodata that can be used by Google Maps to display a map of the entered city.
exports.getGeoData = (req, res) => {
  const address = req.params.address;
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
      process.env.GOOGLE_MAPS_API_KEY
    }`
  ).then(response => {
    if (response.status !== 200) {
      console.log('Error fetching geo data');
    }
    response.json().then(data => {
      res.json(data);
    });
  });
};
