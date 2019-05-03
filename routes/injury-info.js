const injuryList = require('../injury-list.json');

exports.viewAll = (req, res) => {
  res.render('injury-info', {
    title: 'Injury Information',
    injuryList
  });
};

exports.viewCommonInjuries = (req, res) => {
  res.render('common-injuries', {
    title: 'Common Injuries',
    injuryList
  });
};

exports.viewInjuryDetails = (req, res) => {
  res.render('injury-details', {
    title: 'Injury Details',
    injuryList
  });
};
