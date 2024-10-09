const repository = require('../infrastructure/repositories/find.repository')

module.exports = ({ params }) => {
  return repository(params)
}
