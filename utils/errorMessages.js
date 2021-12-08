module.exports = function getErrorMessage (err) {
  if (err.name.match('Database')) {
    return `Invalid value for field '${err.original.sqlMessage.split("'")[1]}'`
  } else if (err.name.match('Constraint')) {
    return 'Constraint Error: ' + err.original.sqlMessage
  } else if (err.name.match('Validation')) {
    return err.message.split(',\n')
  }
  return 'Database Error. Please check for valid fields'
}
