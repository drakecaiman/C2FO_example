var patio = require("patio")

module.exports = {
    up : function(db, done)
	{
        // Create games table
		return db.createTable("games", (table) =>
		{
			table.primaryKey("id")
			table.name(String)
			table.system(String)
			table.genre(String)
		})
    },

    down : function(db, done)
	{
        // Remove tables
		db.dropTable("games")
    }
};
