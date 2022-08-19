const {DataTypes, db} = require('../db');

const User = db.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
})

module.exports = {User};