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

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port', listener.address().port);
});
