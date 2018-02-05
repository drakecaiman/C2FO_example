const config = require('./configs.js')
const patio = require('patio')

var DEINIT = patio.connect(config.URL)
// Remove database
DEINIT.run(`DROP DATABASE ${config.DB_NAME}`).chain(() =>
// Remove user
{ DEINIT.run(`DROP ROLE ${config.DB_USERNAME}`) })
.chain(config.getEndHandler(DEINIT), config.getErrorHandler(DEINIT))
