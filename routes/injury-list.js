const injuryList = require('../injury-list.json');


exports.viewAll = (req, res) => {
  this.client.query(
    'SELECT * FROM sports',
    (error, results) => {
      if (error) {
        return console.log('Error fetching injury list', error);
      }
      console.log('Current injury list results:', results.rows);

      res.render('injury-list', {
        title: 'Injury Information',
        injuryList: results.rows
      });
    }
  );
};

exports.viewCommonInjuries = (req, res) => {
  this.client.query(
    'SELECT * FROM sports',
    (error, results) => {
      if (error) {
        return console.log('Error fetching injury list', error);
      }
      console.log('Current injury list results:', results.rows);

      res.render('injury-list', {
        title: 'Injury Information',
        injuryList: results.rows
      });
    }
  );
};

exports.viewInjuryDetails = (req, res) => {
  res.render('injury-details', {
    title: 'Injury Details',
    injuryList
  });
};
