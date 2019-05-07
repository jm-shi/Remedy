exports.viewCurrent = (req, res) => {
  this.client.query(
    'SELECT * FROM injury WHERE is_current = true',
    (error, results) => {
      if (error) {
        return console.log('Error fetching injury log', error);
      }
      console.log('Current injury log results:', results.rows);
      res.render('current-log', {
        title: 'Current Injury Log',
        currentInjury: results.rows
      });
    }
  );
};

exports.viewPrevious = (req, res) => {
  res.render('previous-log', {
    title: 'Previous Injury Log'
  });
};
