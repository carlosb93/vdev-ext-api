/**
 * Module dependencies.
 */
require('dotenv').config()
const app = require('../app')
const debug = require('debug')('expresstest:server')
const cc = require('node-console-colors')
const http = require('http')
const config = require('../config/global.config')

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config.port)
app.set('port', port)
/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Create database connection & Listen on provided port, on all network interfaces.
 */

require('../config/swagger.config')(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)




/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES': {
      console.info(cc.set('fg_red', bind + ' requires elevated privileges'))
      return process.exit(1)
    }
    case 'EADDRINUSE': {
      console.info(cc.set('fg_red', bind + ' is already in use'))
      return process.exit(1)
    }
    default:
      throw error
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
async function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
  console.info(cc.set('fg_dark_cyan', '_Listening on server: ' + bind))
}
