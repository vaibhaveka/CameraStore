const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const local='mongodb://localhost:27017/Development?readPreference=primary&ssl=false';
mongoose.connect(local,{ useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));