exports.searchSports = (req, res) => {
  const searchQuery = req.params.query;
  console.log('The search query is', searchQuery);

  let sportsToSearch =
    searchQuery === undefined
      ? `SELECT s.sport_id, s.sport_name, s.sport_image_url FROM sport s;`
      : `SELECT s.sport_id, s.sport_name, s.sport_image_url FROM sport s WHERE s.sport_name @@ to_tsquery('${searchQuery}:*');`;

  this.client.query(sportsToSearch, (error, results) => {
    if (error) {
      return console.log('Error fetching searched sports', error);
    }
    res.json(results.rows);
  });
};
