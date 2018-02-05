const config = require('./configs.js')
const patio = require('patio')

var INIT = patio.connect(config.URL)
// Create database
INIT.run(`CREATE DATABASE ${config.DB_NAME}`).chain(() =>
// Create user
{ INIT.run(`CREATE ROLE ${config.DB_USERNAME} WITH LOGIN`) })
.chain(config.getEndHandler(INIT), config.getErrorHandler(INIT))
