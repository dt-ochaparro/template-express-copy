module.exports = {
  development: {
    databases: {
      postgres: {
        username: process.env.DEV_DB_PG_USERNAME,
        password: process.env.DEV_DB_PG_PASSWORD,
        database: process.env.DEV_DB_PG_NAME,
        schema: process.env.DEV_DB_PG_SCHEMA,
        host: process.env.DEV_DB_PG_HOSTNAME,
        port: process.env.DEV_DB_PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
          bigNumberStrings: true
        },
        logging: console.log
      },
      mariadb: {
        username: process.env.DEV_DB_MARIADB_USERNAME,
        password: process.env.DEV_DB_MARIADB_PASSWORD,
        database: process.env.DEV_DB_MARIADB_NAME,
        databaseReplica: process.env.DEV_DB_MARIADB_NAME_REPLICA,
        host: process.env.DEV_DB_MARIADB_HOSTNAME,
        port: process.env.DEV_DB_MARIADB_PORT,
        dialect: 'mysql',
        dialectOptions: {
          bigNumberStrings: true
        },
        logging: console.log
      },
      sqlserver: {
        username: process.env.DEV_DB_SQLSERVER_USERNAME,
        password: process.env.DEV_DB_SQLSERVER_PASSWORD,
        database: process.env.DEV_DB_SQLSERVER_NAME,
        host: process.env.DEV_DB_SQLSERVER_HOSTNAME,
        port: process.env.DEV_DB_SQLSERVER_PORT,
        dialect: 'mssql',
        dialectOptions: {
          // Observe the need for this nested `options` field for MSSQL
          options: {
            // Your tedious options here
            useUTC: false,
            dateFirst: 1,
            encrypt: false
          }
        }
      }
    }
  },
  production: {
    databases: {
      postgres: {
        username: process.env.PROD_DB_PG_USERNAME,
        password: process.env.PROD_DB_PG_PASSWORD,
        database: process.env.PROD_DB_PG_NAME,
        schema: process.env.PROD_DB_PG_SCHEMA,
        host: process.env.PROD_DB_PG_HOSTNAME,
        port: process.env.PROD_DB_PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
          bigNumberStrings: true
        },
        logging: false
      },
      mariadb: {
        username: process.env.PROD_DB_MARIADB_USERNAME,
        password: process.env.PROD_DB_MARIADB_PASSWORD,
        database: process.env.PROD_DB_MARIADB_NAME,
        databaseReplica: process.env.PROD_DB_MARIADB_NAME_REPLICA,
        host: process.env.PROD_DB_MARIADB_HOSTNAME,
        port: process.env.PROD_DB_MARIADB_PORT,
        dialect: 'mysql',
        dialectOptions: {
          bigNumberStrings: true
        },
        logging: false
      },
      sqlserver: {
        username: process.env.PROD_DB_SQLSERVER_USERNAME,
        password: process.env.PROD_DB_SQLSERVER_PASSWORD,
        database: process.env.PROD_DB_SQLSERVER_NAME,
        host: process.env.PROD_DB_SQLSERVER_HOSTNAME,
        port: process.env.PROD_DB_SQLSERVER_PORT,
        dialect: 'mssql',
        dialectOptions: {
          // Observe the need for this nested `options` field for MSSQL
          options: {
            // Your tedious options here
            useUTC: false,
            dateFirst: 1
          }
        }
      }
    }
  },
  // Se declaran con el proposito de ejecutar los scripts de sequelize-cli (migrations, seeders, etc)
  postgres: {
    username: process.env.DEV_DB_PG_USERNAME,
    password: process.env.DEV_DB_PG_PASSWORD,
    database: process.env.DEV_DB_PG_NAME,
    schema: process.env.DEV_DB_PG_SCHEMA,
    host: process.env.DEV_DB_PG_HOSTNAME,
    port: process.env.DEV_DB_PG_PORT,
    dialect: 'postgres'
  },
  mariadb: {
    username: process.env.DEV_DB_MARIADB_USERNAME,
    password: process.env.DEV_DB_MARIADB_PASSWORD,
    database: process.env.DEV_DB_MARIADB_NAME,
    host: process.env.DEV_DB_MARIADB_HOSTNAME,
    port: process.env.DEV_DB_MARIADB_PORT,
    dialect: 'mysql'
  }
}
