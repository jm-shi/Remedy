const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const { Client } = require('pg');

// Controllers
const doctorController = require('./controllers/doctor');
const injuryLogController = require('./controllers/injuryLog');
const injuryListController = require('./controllers/injuryList');

// Routes
const doctor = require('./routes/doctor');
const home = require('./routes/home');
const injuryInfo = require('./routes/injury-list');
const injuryLog = require('./routes/injury-log');
const login = require('./routes/login');
const map = require('./routes/map');
const pharmacy = require('./routes/pharmacy');
const profile = require('./routes/profile');
const fetch = require('node-fetch');
const yelp = require('yelp-fusion');

const searchRequest = {
  term: 'pharmacy',
  location: 'La Jolla',
  categories: 'pharmacy'
};

require('dotenv').config();

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const yelp_Client = yelp.client(process.env.YELP_API_KEY);

handlebars.registerHelper('concat', function(x, y) {
  return `${x}/${y}`;
});

handlebars.registerHelper('toLowerCase', function(x) {
  return x.toLowerCase();
});

handlebars.registerHelper('ifEquals', function(x, y, options) {
  return x === y ? options.fn(this) : options.inverse(this);
});

let client;
const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
  client = new Client({
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'password',
    host: 'localhost',
    port: 5432,
    database: 'remedy'
  });
} else {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
}
client.connect();
injuryLogController.client = client;
injuryListController.client = client;
injuryLog.client = client;
injuryInfo.client = client;

pharmacy.yelp_api_key = process.env.YELP_API_KEY;

app.get('/', home.view);
// app.get('/common-injuries', injuryInfo.viewCommonInjuries);
app.get(
  '/common-injuries/:id',
  (req, res, next) => {
    app.use('/common-injuries', express.static(__dirname + '/public'));
    next();
  },
  injuryInfo.viewCommonInjuries
);
app.get('/contact-doctor', doctor.viewContactDoctor);
app.get('/current-log', injuryLog.viewCurrent);
app.get(
  '/doctor/:id',
  (req, res, next) => {
    app.use('/doctor', express.static(__dirname + '/public'));
    next();
  },
  doctor.viewDoctorDetails
);
app.get(
  '/injury-details/:id',
  (req, res, next) => {
    app.use('/injury-details', express.static(__dirname + '/public'));
    next();
  },
  injuryInfo.viewInjuryDetails
);
app.get('/injury-list', injuryInfo.viewAll);
app.get('/login', login.view);
app.get('/map', map.view);

app.get(
  '/pharmacy/:id',
  (req, res, next) => {
    app.use('/pharmacy', express.static(__dirname + '/public'));
    next();
  },
  pharmacy.viewPharmacyDetails
);
app.get('/pharmacy-data', (req, res) => {
  yelp_Client
    .search(searchRequest)
    .then(response => {
      res.send(response.body);
    })
    .catch(error => {
      console.log(error);
    });
});
app.get('/pharmacy-data/:id', (req, res) => {
  const pharmacyId = req.params.id;

  yelp_Client
    .business(pharmacyId)
    .then(response => {
      res.send(response.body);
    })
    .catch(error => {
      console.log(error);
    });
});

//app.get('/pharmacy', pharmacy.view);
app.get('/previous-log', injuryLog.viewPrevious);
app.get('/profile', profile.view);

app.get('/doctor-data', doctorController.getDoctorData);
app.get('/doctor-data/:id', doctorController.getIndividualDoctorData);

app.get('/injury-log', injuryLogController.getInjuries);
app.post('/add-injury', injuryLogController.addInjury);
app.post('/update-injury', injuryLogController.updateInjury);
app.delete('/injury/:id', injuryLogController.deleteInjury);
app.post('/complete-injury/:id', injuryLogController.completeInjury);
app.get('/view-logs/:injury_id', injuryLogController.viewLogs);
app.post('/add-log', injuryLogController.addLog);
app.post('/update-log', injuryLogController.updateLog);
app.delete('/delete-log/:id', injuryLogController.deleteLog);

app.get('/sport', injuryListController.searchSports);
app.get('/sport/:query', injuryListController.searchSports);
app.get('/common-injury/', injuryListController.searchCommonInjuries);
app.get('/common-injury/:query', injuryListController.searchCommonInjuries);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
