const {db} = require('.')
const {movieData, users} = require('./seedData')
const {Movie, User} = require('../models')

let createDataBase = async () => {
    await db.sync({force:true});
    await Promise.all(movieData.map((m) => {Movie.create(m)}))
    await Promise.all(users.map((m) => {User.create(m)}))
};

let buildDB = async () =>{
    await createDataBase()
};

buildDB()

module.exports = {buildDB};