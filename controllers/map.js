const fetch = require('node-fetch');

exports.getMapData = (req, res) => {
  fetch(
    `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${
      process.env.BETTER_DOCTOR_API_KEY
    }`
  ).then(response => {
    if (response.status !== 200) {
      console.log('Error fetching doctor data');
    }

    response.json().then(data => {
      res.json(data);
    });
  });
};
