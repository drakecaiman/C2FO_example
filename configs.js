module.exports =
{
	DB_USERNAME: "test",
	DB_NAME: "c2fo_duncan",
	GAME_TABLE_NAME: "games",
};

module.exports.URL = `pg://127.0.0.1:5432/`
module.exports.DB_URL = `pg://${module.exports.DB_USERNAME}@127.0.0.1:5432/${module.exports.DB_NAME}`

module.exports.getEndHandler = (database) =>
{
	return () => { database.disconnect() }
}

module.exports.getErrorHandler = (database) =>
{
	return (error) =>
	{
		console.log(error)
		database.disconnect()
	}
}
