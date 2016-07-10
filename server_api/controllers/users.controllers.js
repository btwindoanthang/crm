var usersModels= require('../models/users.models');

module.exports.getUsers = function (req,res) {
    res.send(usersModels.users('thang','doan'));
};