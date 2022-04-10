const mongoose = require('mongoose');

// Connect with mongodb
mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;