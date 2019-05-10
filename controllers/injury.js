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
    'INSERT INTO injury (name, is_current, description) VALUES ($1, $2, $3)',
    [req.body.name, true, req.body.description]
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
  this.client.query('UPDATE injury SET name=$1, description=$2 WHERE injury_id = $3', [req.body.name, req.body.description, req.body.id]);
  res.redirect('/current-log');
};