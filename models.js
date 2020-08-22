const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false // console.log
});

const User = sequelize.define('User', {
    name: {
        type : Sequelize.STRING,
        unique: true
     } // varchar 255 
});


module.exports = {Sequelize ,sequelize,  User}