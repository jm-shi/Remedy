const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use('/', (req, res, next) => {
//   console.log('The req url is', req.url);
//   next();
// });
app.use(express.static(__dirname + '/public'));

handlebars.registerHelper('concat', function(x, y) {
  return `${x}/${y}`;
});

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

const injuryList = require('./injury-list.json');

app.get('/current-log', (req, res) => {
  res.render('current_log', {
    title: 'Current Injury Log'
  });
});

app.get('/previous-log', (req, res) => {
  res.render('previous_log', {
    title: 'Previous Injury Log'
  });
});

app.get('/contact-doctor', (req, res) => {
  res.render('contact_doctor', {
    title: 'Contact Doctor'
  });
});

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login'
  });
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    title: 'Profile'
  });
});

app.get('/injury-list', (req, res) => {
  res.render('injury_list', {
    title: 'Injury List',
    injuryList
  });
});

app.get('/common-injuries', (req, res) => {
  res.render('common_injuries', {
    title: 'Common Injuries',
    injuryList
  });
});

app.get('/injury-information', (req, res) => {
  res.render('injury_information', {
    title: 'Injury Information',
    injuryList
  });
});

app.get('/map', (req, res) => {
  res.render('map', {
    title: 'Map'
  });
});

// app.get('/doctor', (req, res) => {
//   res.render('doctor', {
//     title: 'Doctor'
//   });
// });

app.get('/doctor/:id', (req, res) => {
  const id = req.params.id;
  app.use('/doctor', express.static(__dirname + '/public'));

  res.render('doctor', {
    title: 'Doctor Details',
    doctorID: id
  });
});

app.get('/pharmacy', (req, res) => {
  res.render('pharmacy', {
    title: 'Pharmacy'
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
