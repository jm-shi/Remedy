/*
 * index.js
 * Handles app startup and defines routes.
 */

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const { Client } = require('pg');

// Controllers
const doctorController = require('./controllers/doctor');
const injuryLogController = require('./controllers/injuryLog');
const injuryListController = require('./controllers/injuryList');
const pharmacyController = require('./controllers/pharmacy');
const mapController = require('./controllers/map');

// Routes
const doctor = require('./routes/doctor');
const home = require('./routes/home');
const injuryInfo = require('./routes/injury-list');
const injuryLog = require('./routes/injury-log');
const login = require('./routes/login');
const map = require('./routes/map');
const pharmacy = require('./routes/pharmacy');
const profile = require('./routes/profile');
const help = require('./routes/help');

require('dotenv').config();

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Used to concatenate a string and a variable in a Handlebars partial
handlebars.registerHelper('concat', function(x, y) {
  return `${x}/${y}`;
});

handlebars.registerHelper('toLowerCase', function(x) {
  return x.toLowerCase();
});

handlebars.registerHelper('ifEquals', function(x, y, options) {
  return x === y ? options.fn(this) : options.inverse(this);
});

// Set a selected select option in Handlebars template
// Source: https://stackoverflow.com/questions/13046401/how-to-set-selected-select-option-in-handlebars-template
handlebars.registerHelper('select', function(selected, options) {
  return options
    .fn(this)
    .replace(new RegExp(' value="' + selected + '"'), '$& selected="selected"');
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

app.get('/', home.view);
// app.get('/common-injuries', injuryInfo.viewCommonInjuries);

app.get('/geodata/:address', mapController.getGeoData);

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

app.get('/pharmacy-data', pharmacyController.getPharmacyData);
app.get('/pharmacy-data/:id', pharmacyController.getSinglePharmacyData);

app.get('/previous-log', injuryLog.viewPrevious);
app.get('/profile', profile.view);

app.get('/help', help.view);

app.get('/doctor-data', doctorController.getDoctorData);
app.get('/doctor-data/:id', doctorController.getIndividualDoctorData);

app.get('/injury-log', injuryLogController.getInjuries);
app.post('/add-injury', injuryLogController.addInjury);
app.post('/update-injury', injuryLogController.updateInjury);
app.delete('/injury/:id', injuryLogController.deleteInjury);
app.post('/complete-injury/:id', injuryLogController.completeInjury);
app.post('/uncomplete-injury/:id', injuryLogController.uncompleteInjury);
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
