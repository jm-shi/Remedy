const yelp = require('yelp-fusion');

exports.getPharmacyData = (req, res) => {
  const yelpClient = yelp.client(process.env.YELP_API_KEY);
  const location = req.query.address;
  const latitude = req.query.lat;
  const longitude = req.query.lng;
  const sortByType = req.query.sortByType;
  const searchRequest = {
    term: 'pharmacy',
    latitude,
    longitude,
    categories: 'pharmacy',
    limit: 10,
    sort_by: sortByType || 'best_match'
  };
  yelpClient
    .search(searchRequest)
    .then(response => {
      res.send(response.body);
    })
    .catch(error => {
      console.log('Error with getting pharmacy data:', error);
    });
};

exports.getSinglePharmacyData = (req, res) => {
  const yelpClient = yelp.client(process.env.YELP_API_KEY);
  const pharmacyId = req.params.id;
  yelpClient
    .business(pharmacyId)
    .then(response => {
      res.send(response.body);
    })
    .catch(error => {
      console.log('Error with getting single pharmacy data', error);
    });
};
