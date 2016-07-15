var usersModels= require('../models/users.models');
var data;
module.exports.getUsers = function (req,res) {
	
	usersModels.users('thang','doan').then(users => {
	 	 res.send(users);
	 	 //data = users;
	 	 //console.log(data);
    	
  })
  .catch(err => {
    // handle errors
  })
    //res.send(data);
};