/*
 * injury-log.js
 * Gets all current/previous user-entered injuries saved in the database and renders the
 * current/previous log page.
 */

exports.viewCurrent = (req, res) => {
  // Get current injuries, showing the most recently received injury on top
  this.client.query(
    'SELECT * FROM injury, EXTRACT(EPOCH FROM expected_recovery_date::timestamp with time zone) AS expected_recovery_date_unix_timestamp WHERE is_current = true ORDER BY created_at DESC',
    (error, results) => {
      if (error) {
        return console.log('Error fetching current injury', error);
      }
      // console.log('Current injury results:', results.rows);

      // Save the expected recovery date timestamp as a string
      // Used to help display the expected recovery date on the user's screen.
      results.rows.forEach((row, index) => {
        results.rows[index].created_at_string = row.created_at.toDateString();
        const expectedRecoveryDate = row.expected_recovery_date;
        if (expectedRecoveryDate) {
          results.rows[
            index
          ].expected_recovery_date_string = expectedRecoveryDate.toDateString();
        }
      });

      res.render('current-log', {
        title: 'Current Injury Log',
        currentInjury: results.rows
      });
    }
  );
};

exports.viewPrevious = (req, res) => {
  // Get previous injuries, showing the most recently resolved injury on top
  this.client.query(
    'SELECT * FROM injury WHERE is_current = false ORDER BY resolved_at DESC',
    (error, results) => {
      if (error) {
        return console.log('Error fetching previous injury', error);
      }
      // console.log('Previous injury results:', results.rows);

      // Save the expected recovery date timestamp as a string
      // Used to help display the expected recovery date on the user's screen.
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
