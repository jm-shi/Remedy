exports.viewCurrent = (req, res) => {
  this.client.query(
    'SELECT * FROM injury WHERE is_current = true ORDER BY created_at',
    (error, results) => {
      if (error) {
        return console.log('Error fetching current injury log', error);
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
  this.client.query(
    'SELECT * FROM injury WHERE is_current = false ORDER BY created_at',
    (error, results) => {
      if (error) {
        return console.log('Error fetching previous injury log', error);
      }
      console.log('Previous injury log results:', results.rows);
      res.render('previous-log', {
        title: 'Previous Injury Log',
        previousInjury: results.rows
      });
    }
  );
};
