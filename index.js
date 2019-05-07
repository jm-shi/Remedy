const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const { Client } = require('pg');

// Controllers
const doctorController = require('./controllers/doctor');
const injuryController = require('./controllers/injury');
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

require('dotenv').config();

app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

handlebars.registerHelper('concat', function(x, y) {
  return `${x}/${y}`;
});

let client;
const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
  client = new Client({
    user: 'jamie',
    password: 'password',
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
injuryController.client = client;
injuryLog.client = client;

app.get('/', home.view);
app.get('/common-injuries', injuryInfo.viewCommonInjuries);
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
app.get('/injury-details', injuryInfo.viewInjuryDetails);
app.get('/injury-list', injuryInfo.viewAll);
app.get('/login', login.view);
app.get('/map', map.view);
app.get('/pharmacy', pharmacy.view);
app.get('/previous-log', injuryLog.viewPrevious);
app.get('/profile', profile.view);

app.get('/doctor-data', doctorController.getDoctorData);
app.get('/doctor-data/:id', doctorController.getIndividualDoctorData);
app.get('/injury-log', injuryController.getInjuries);
app.post('/add-injury', injuryController.addInjury);
app.post('/update-injury', injuryController.updateInjury);
app.delete('/injury/:id', injuryController.deleteInjury);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
