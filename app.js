const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const indexRouter = require('./routes')
const env = process.env.NODE_ENV || 'development'
const config = require('./config/global.config')
const utilGlobal = require('./utils/globals')

const app = express()
app.locals.ENV = env
app.locals.ENV_DEVELOPMENT = env === 'development'

app.use(utilGlobal.allowCrossDomain)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())
app.use('/api/' + config.apiPrefix, indexRouter)

module.exports = app
