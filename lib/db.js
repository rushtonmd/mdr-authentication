var config = require('../lib/app.config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Conect to cloud database
connect(config.user, config.password, config.address);

// Connect to mongo
function connect(user, password, address){
	var url = 'mongodb://' + user + ':' + password + address;
	mongoose.connect(url);
}
function disconnect(){
	mongoose.disconnect();
}