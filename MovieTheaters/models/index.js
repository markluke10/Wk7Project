const {Movie} = require('./Movie')
const {User} = require('./User')

Movie.belongsToMany(User, {through: 'Movies_Watched'})
User.belongsToMany(Movie, {through: 'Movies_Watched'})



module.exports = {Movie, User};