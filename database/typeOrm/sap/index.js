const { DataSource } = require('typeorm')
const { v4: uuid } = require('uuid')
const env = process.env.NODE_ENV || 'development'
const config = require('../../../config/typeorm.config')[env]

const appDataSource = new DataSource({
  name: uuid(),
  username: config.username,
  password: config.password,
  schema: config.schema,
  host: config.host,
  port: config.port,
  type: 'sap',
  logging: true,
  entities: []
})

module.exports = {
  appDataSource
}
