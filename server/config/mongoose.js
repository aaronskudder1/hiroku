var mongoose = require('mongoose');
    //ASModel = require('../models/ASModel');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('AS db opened');
  });
    
   //ASModel.createASData();
}