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
  console.log('delete injury id', req.params.id);
  this.client.query('DELETE FROM injury WHERE injury_id = $1', [req.params.id]);
};
