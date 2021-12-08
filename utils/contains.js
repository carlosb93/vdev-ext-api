const isType = require('./types').isType
const typeMap = require('./types').typeMap

module.exports = function contains (obj, keys) {
  // if ( !obj ) {
  //   return false;
  // }

  const k = Object.keys(obj)

  for (let i = 0, maxi = keys.length; i < maxi; i += 1) {
    const key = keys[i][0]
    const type = keys[i][1]
    if (!(k.indexOf(key) > -1 && isType(obj[key], type))) {
      return `Missing required field '${key}' or mismatch type '${typeMap[type]}'`
    }
  }

  return null
}
