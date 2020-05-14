const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(
  `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@ds261040.mlab.com:61040/${config.DB}`,
  { useNewUrlParser: true }
)
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

require('./todo');
require('./user');