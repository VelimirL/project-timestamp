const express = require('express');
const routes = require('./routes/index');

const app = express();

const cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', routes.homePage);

app.get('/api/hello', routes.sayHello);

app.get('/api/:date?', routes.getDates);

app.listen(3000);

module.exports = app;
