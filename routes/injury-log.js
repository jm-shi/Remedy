exports.viewCurrent = (req, res) => {
  this.client.query(
    'SELECT * FROM injury, EXTRACT(EPOCH FROM expected_recovery_date::timestamp with time zone) AS expected_recovery_date_unix_timestamp WHERE is_current = true ORDER BY created_at',
    (error, results) => {
      if (error) {
        return console.log('Error fetching current injury', error);
      }
      console.log('Current injury results:', results.rows);

      results.rows.forEach((row, index) => {
        results.rows[index].created_at_string = row.created_at.toDateString();
        const expectedRecoveryDate = row.expected_recovery_date;
        if (expectedRecoveryDate) {
          results.rows[
            index
          ].expected_recovery_date_string = expectedRecoveryDate.toDateString();
        }
      });

      console.log('result.rows', results.rows);
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
        return console.log('Error fetching previous injury', error);
      }
      console.log('Previous injury results:', results.rows);

      results.rows.forEach((row, index) => {
        results.rows[index].created_at_string = row.created_at.toDateString();
        results.rows[index].resolved_at_string = row.resolved_at.toDateString();
        if (row.expected_recovery_date) {
          results.rows[
            index
          ].expected_recovery_date_string = row.expected_recovery_date.toDateString();
        }
      });

      res.render('previous-log', {
        title: 'Previous Injury Log',
        previousInjury: results.rows
      });
    }
  );
};
