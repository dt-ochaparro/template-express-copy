const { mariadb } = require('../../../../database/config')

module.exports = async (params) => {
  return await mariadb.example.findOne({
    where: {
      id: params.id
    }
  })
}
