const {DataTypes, db} = require('../db');

const Movie = db.define('movie', {
    title: DataTypes.STRING,
    length: DataTypes.STRING,
    director: DataTypes.STRING,
    genre: DataTypes.STRING,
    numberOfViews: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
});

module.exports = {Movie};