const fetch = require('node-fetch');

exports.getDoctorData = (req, res) => {
  // Location is set to La Jolla by default
  const lat = req.query.lat !== 'undefined' ? req.query.lat : 32.8328;
  const lng = req.query.lng !== 'undefined' ? req.query.lng : -117.2713;
  fetch(
    `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${lng}%2C50&user_location=32.8328%2C-117.2713&skip=0&limit=10&user_key=${
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

exports.getIndividualDoctorData = (req, res) => {
  const doctorId = req.params.id;
  fetch(
    `https://api.betterdoctor.com/2016-03-01/doctors/${doctorId}?user_key=${
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
