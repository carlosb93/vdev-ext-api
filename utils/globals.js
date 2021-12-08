module.exports = {
  allowCrossDomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTION')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  },
  error404 (req, res) {
    res.status(404).jsonp({
      message: 'Resource not found'
    })
  }
}
