const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/login', require('./controller/login'));
require('./config/db');
app.listen(5001, () => console.log(`App running on port 5001`));
