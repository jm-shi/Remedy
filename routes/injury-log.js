exports.viewCurrent = (req, res) => {
  res.render('current-log', {
    title: 'Current Injury Log'
  });
};

exports.viewPrevious = (req, res) => {
  res.render('previous-log', {
    title: 'Previous Injury Log'
  });
};
