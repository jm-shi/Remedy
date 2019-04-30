const express = require('express');
const exphbs = require('express-handlebars');

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

const injuryList = require('./injury-list.json');

app.get('/injury-list', (req, res) => {
  //console.log(injuryList);
  res.render('injury_list', injuryList);
});

app.get('/common-injuries', (req, res) => {
  //console.log(injuryList);
  res.render('common_injuries', injuryList);
});

app.get('/injury-information', (req, res) => {
  //console.log(injuryList);
  res.render('injury_information', injuryList);
});

app.get('/map', (req, res) => {
  res.render('map');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
