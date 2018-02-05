const config = require('./configs.js')
const patio = require('patio')

var populateTables = function(DB)
{
	var Game = patio.addModel(DB.from(config.GAME_TABLE_NAME))
	return patio.syncModels().chain( () =>
	{
        // Populate games table
		return Game.save([
			{name: "Super Mario Galaxy",						system: "Wii",				genre: "Platforming"},
			{name: "Shadow of the Colossus",					system: "Playstation 2",	genre: "RPG"},
			{name: "The Legend of Zelda: Breath of the Wild", 	system: "Wii U",			genre: "Adventure"},
			{name: "Bravely Default",							system: "3DS",				genre: "RPG"}
		])
	})
}

var DB = patio.connect(config.DB_URL)
populateTables(DB).chain(config.getEndHandler(DB), config.getErrorHandler(DB))
