const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '..', 'config', 'database.config.js'))[env]
const databases = Object.keys(config.databases)
const db = {}

/* const db = {
  Op: Sequelize.Op,
  literal: Sequelize.literal
} */

/* Agregar Bases de datos */
for (let i = 0; i < databases.length; ++i) {
  const database = databases[i]
  const dbPath = config.databases[database]
  db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath)
  db[database].sequelize = db[database]
  db[database].Sequelize = Sequelize
}

/** Agregar modelos por cada base de datos **/

// Añadir modelos desde la carpeta postgres
fs
  .readdirSync(path.join(__dirname, 'postgres', 'models'))
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, 'postgres', 'models', file))(db.postgres.sequelize, Sequelize.DataTypes)
    db.postgres[model.name] = model
  })

// Añadir modelos desde la carpeta mariadb
fs
  .readdirSync(path.join(__dirname, 'mariadb', 'models'))
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, 'mariadb', 'models', file))(db.mariadb.sequelize, Sequelize.DataTypes)
    db.mariadb[model.name] = model
  })

// Añadir modelos desde la carpeta sqlserver
fs
  .readdirSync(path.join(__dirname, 'sqlserver', 'models'))
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, 'sqlserver', 'models', file))(db.sqlserver.sequelize, Sequelize.DataTypes)
    db.sqlserver[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  for (const [index] of Object.entries(db[modelName].models)) {
    if (db[modelName].models[index].associate) {
      db[modelName].models[index].associate(db[modelName].models)
    }
  }
})

module.exports = db
