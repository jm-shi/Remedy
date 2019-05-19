exports.getInjuries = (req, res) => {
  this.client.query('SELECT * FROM injury', (error, results) => {
    if (error) {
      return console.log('Error fetching injury log', error);
    }
    res.json(results.rows);
  });
};

exports.addInjury = (req, res) => {
  this.client.query(
    'INSERT INTO injury (name, is_current, description, expected_recovery_date, treatment) VALUES ($1, $2, $3, $4, $5)',
    [
      req.body.name,
      true,
      req.body.description,
      req.body.expected_recovery_date || null,
      req.body.treatment
    ]
  );
  console.log('Adding injury...');
  res.redirect('/current-log');
};

exports.deleteInjury = (req, res) => {
  console.log('Deleting injury with id', req.params.id);
  this.client.query('DELETE FROM injury WHERE injury_id = $1', [req.params.id]);
  res.sendStatus(200);
};

exports.updateInjury = (req, res) => {
  this.client.query(
    'UPDATE injury SET name=$1, description=$2, expected_recovery_date=$3, treatment=$4 WHERE injury_id = $5',
    [
      req.body.name,
      req.body.description,
      req.body.expected_recovery_date || null,
      req.body.treatment,
      req.body.id
    ]
  );
  res.redirect('/current-log');
};

exports.completeInjury = (req, res) => {
  this.client.query(
    'UPDATE injury SET is_current=$1, resolved_at=$2 WHERE injury_id = $3',
    [false, new Date(), req.body.injury_id]
  );
  res.redirect('/current-log');
};

exports.addLog = (req, res) => {
  this.client.query('INSERT INTO log (injury_id, content) VALUES ($1, $2)', [
    req.body.injuryId,
    req.body.logContent
  ]);
  res.sendStatus(200);
};

exports.updateLog = (req, res) => {
  this.client.query('UPDATE log SET content=$1 WHERE log_id = $2', [
    req.body.logContent,
    req.body.logId
  ]);
  res.sendStatus(200);
};

exports.viewLogs = (req, res) => {
  this.client.query(
    'SELECT * FROM log WHERE injury_id = $1 ORDER BY time',
    [req.params.injury_id],
    (error, results) => {
      if (error) {
        return console.log('Error fetching current injury log', error);
      }
      console.log('Current injury log results:', results.rows);
      res.send(results.rows);
    }
  );
};

exports.deleteLog = (req, res) => {
  console.log('Deleting log with id', req.params.id);
  this.client.query('DELETE FROM log WHERE log_id = $1', [req.params.id]);
  res.sendStatus(200);
};
