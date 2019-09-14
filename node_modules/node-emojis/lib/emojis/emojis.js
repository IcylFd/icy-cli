const animalEmojis = require('./animal-emojis')
const foodEmojis = require('./food-emojis')
const natureEmojis = require('./nature-emojis')
const peopleEmojis = require('./people-emojis')
const travelEmojis = require('./nature-emojis')

const emojis = Object.assign(animalEmojis, foodEmojis, natureEmojis, peopleEmojis, travelEmojis)

module.exports = emojis
