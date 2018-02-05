const config = require('./configs.js')

const express = require('express')
const patio = require('patio')
const bodyParser = require('body-parser')

const hostname = '127.0.0.1'
const port = 3000

var closeResponse = function(response, body)
{
	response.statusCode = 200
	response.end(body)
	patio.disconnect()
}

// API app
const app = express()
app.use(bodyParser.json());
app.use( (request, response, next) =>
{
    // Setup headers
	response.header('Content-Type', 'application/json')
	response.header("Access-Control-Allow-Origin", "*")
	response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    // Connect to database
	var DB = patio.connect(config.DB_URL)
	next()
})
app.get('/api/games', (request, response) =>
{

	var Game = patio.addModel("games")
	patio.syncModels().chain( () =>
	{
		Game.all().chain((games) => {closeResponse(response, JSON.stringify(games))})
	})
})
app.put('/api/games', (request, response) =>
{

	var Game = patio.addModel("games")
	patio.syncModels().chain( () =>
	{
		Game.save(request.body).chain((games) => {closeResponse(response, JSON.stringify(games))})
	})
})
app.delete("/api/games/:gameId", (request, response) =>
{
	var Game = patio.addModel("games")
	patio.syncModels().chain( () =>
	{
		Game.removeById(request.params.gameId).chain(closeResponse(response))
	})
})
app.post("/api/games/:gameId", (request, response) =>
{
	var Game = patio.addModel("games")
	patio.syncModels().chain( () =>
	{
		Game.update(request.body, {id: request.params.gameId}).chain(closeResponse(response))
	})
})
app.listen(port, hostname)
console.log(`Running on http://${hostname}:${port}`)
