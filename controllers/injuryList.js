exports.searchSports = (req, res) => {
  const searchQuery = req.params.query;

  let sportsToSearch =
    searchQuery === undefined || searchQuery === ''
      ? `SELECT s.sport_id, s.sport_name, s.sport_image_url FROM sport s;`
      : `SELECT s.sport_id, s.sport_name, s.sport_image_url FROM sport s WHERE s.sport_name @@ to_tsquery('${searchQuery}:*');`;

  this.client.query(sportsToSearch, (error, results) => {
    if (error) {
      return console.log('Error fetching searched sports', error);
    }
    res.json(results.rows);
  });
};

exports.searchCommonInjuries = (req, res) => {
  const sportId = req.query.sportId;
  const searchQuery = req.query.searchQuery;

  let commonInjuriesToSearch =
    searchQuery === undefined || searchQuery === ''
      ? `SELECT 
      i.c_injury_id, i.c_injury_name, 
      i.c_injury_image_url
      FROM sport s 
      INNER JOIN sport_c_injury si 
      ON (s.sport_id = si.sport_id) 
      INNER JOIN c_injury i ON (si.c_injury_id = i.c_injury_id) 
      WHERE s.sport_id = ${sportId}
      ORDER BY i.c_injury_name;
      `
      : `SELECT 
      i.c_injury_id, i.c_injury_name, 
      i.c_injury_image_url
      FROM sport s 
      INNER JOIN sport_c_injury si 
      ON (s.sport_id = si.sport_id) 
      INNER JOIN c_injury i ON (si.c_injury_id = i.c_injury_id) 
      WHERE s.sport_id = ${sportId}
      AND i.c_injury_name @@ to_tsquery('${searchQuery}:*')
      ORDER BY i.c_injury_name;
      `;

  this.client.query(commonInjuriesToSearch, (error, results) => {
    if (error) {
      return console.log('Error fetching searched common injuries', error);
    }
    res.json(results.rows);
  });
};
