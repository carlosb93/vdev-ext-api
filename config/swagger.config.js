const { _ } = require('lodash')
const glob = require('glob')
const config = require('./global.config')
const cc = require('node-console-colors')
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const resolveRefs = require('json-refs').resolveRefs

const options = {
  openapi: '3.0.0',
  info: {
    title: 'VDEV API',
    version: '1.0.0',
    description: 'VDEV Platform REST API documentation'
  },
  servers: [
    {
      url: `${config.app.domain}:${config.port}/api/${config.apiPrefix}`,
      description: 'Basic Url'
    }
  ]
}
const multiFileSwagger = (root) => {
  const options = {
    filter: ['relative', 'remote'],
    resolveCirculars: true,
    loaderOptions: {
      processContent: function (res, callback) {
        callback(null, yamljs.parse(res.text))
      }
    }
  }
  return resolveRefs(root, options).then(
    function (results) {
      return results.resolved
    },
    function (err) {
      console.info(cc.set('fg_red', err.stack))
    }
  )
}
const buildSwaggerDocument = async () => {
  const result = {}
  const yamlRoutes = []
  yamlRoutes.push(yamljs.load(config.root + '/config/swagger.yaml'))
  for (const iter of glob.sync(config.root + '/apiServices/**/**/swagger.yaml')) {
    yamlRoutes.push(yamljs.load(iter))
  }
  const swaggerDocuments = await multiFileSwagger(yamlRoutes)
  for (const doc of swaggerDocuments) {
    _.mergeWith(result, doc, (objValue, srcValue) => {
      if (_.isObject(srcValue) && _.isArray(objValue)) {
        return objValue.concat(srcValue)
      }
      if (_.isUndefined(srcValue) || _.isNull(srcValue)) {
        return objValue
      }
    })
  }
  return result
}
module.exports = async (app) => {
  const document = await buildSwaggerDocument()
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup({ ...options, ...document }))
}
