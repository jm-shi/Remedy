const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

// Controllers
const mapController = require('./controllers/map');
const doctorController = require('./controllers/doctor');

// Routes
const doctor = require('./routes/doctor');
const home = require('./routes/home');
const injuryInfo = require('./routes/injury-info');
const injuryLog = require('./routes/injury-log');
const login = require('./routes/login');
const map = require('./routes/map');
const pharmacy = require('./routes/pharmacy');
const profile = require('./routes/profile');

require('dotenv').config();

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
app.get('/injury-info', injuryInfo.viewAll);
app.get('/login', login.view);
app.get('/map', map.view);
app.get('/pharmacy', pharmacy.view);
app.get('/previous-log', injuryLog.viewPrevious);
app.get('/profile', profile.view);

app.get('/doctor-data', doctorController.getDoctorData);
app.get('/doctor-data/:id', doctorController.getIndividualDoctorData);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
