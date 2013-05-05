var config = require('../lib/app.config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Conect to cloud database
//var user = "testuser1";
//var password = "testuser1";
//var address = '@dharma.mongohq.com:10026/MDR_DB1';
connect(config.user, config.password, config.address);

// Connect to mongo
function connect(user, password, address){
	var url = 'mongodb://' + user + ':' + password + address;
	mongoose.connect(url);
}
function disconnect(){
	mongoose.disconnect();
}