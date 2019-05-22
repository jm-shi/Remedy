const fetch = require('node-fetch');

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
