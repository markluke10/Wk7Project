const {DataTypes, db} = require('../db');

const Movie = db.define('movie', {
    title: DataTypes.STRING,
    length: DataTypes.STRING,
    director: DataTypes.STRING,
    gross: DataTypes.STRING,
    rating: DataTypes.INTEGER,
});

module.exports = {Movie};