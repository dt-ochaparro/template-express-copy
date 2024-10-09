const repository = require('../infrastructure/repositories/oitm.repository')

module.exports = ({ params }) => {
  console.log('useCase ---> ', params)
  return repository(params)
}
