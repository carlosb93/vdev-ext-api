const path = require('path')
const rootPath = path.join(__dirname, '/..')
const env = process.env.NODE_ENV || 'development'
const globalConfig = {
  development: {
    root: rootPath,
    app: {
      name: 'vdev-api-backend',
      domain: 'http://localhost'
    },
    port: process.env.SERVER_PORT || 3000,
    db: {
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'vdevoficial',
      logging: false
    },
    secret: process.env.SECRET_TOKEN_KEY,
    apiPrefix: 'v1/'
  },
  production: {
    root: rootPath,
    app: {
      name: 'vdev-api-backend',
      domain: 'http://172.20.20.48'
    },
    port: process.env.SERVER_PORT || 3000,
    db: {
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'vdevoficial',
      logging: false
    },
    apiPrefix: 'v1'
  },
  test: {
    root: rootPath,
    app: {
      name: 'vdev-api-backend',
      domain: 'http://localhost'
    },
    port: process.env.SERVER_PORT || 3000,
    db: {
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'vdevoficial',
      logging: false
    },
    apiPrefix: 'v1'
  }
}

module.exports = globalConfig[env]
