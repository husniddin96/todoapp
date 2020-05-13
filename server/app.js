require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/login', require('./routes/login'));
app.use('/todo', require('./routes/todo'))

app.listen(config.PORT, ()=> console.log(`Listening on port ${config.PORT}`));