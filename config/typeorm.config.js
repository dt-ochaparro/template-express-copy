module.exports = {
  development: {
    username: process.env.DEV_DB_SAP_USERNAME,
    password: process.env.DEV_DB_SAP_PASSWORD,
    schema: process.env.DEV_DB_SAP_SCHEMA,
    host: process.env.DEV_DB_SAP_HOST,
    port: process.env.DEV_DB_SAP_PORT,
    dbSap: process.env.DEV_DB_SAP
  },
  production: {
    username: process.env.PROD_DB_SAP_USERNAME,
    password: process.env.PROD_DB_SAP_PASSWORD,
    schema: process.env.PROD_DB_SAP_SCHEMA,
    host: process.env.PROD_DB_SAP_HOST,
    port: process.env.PROD_DB_SAP_PORT,
    dbSap: process.env.PROD_DB_SAP
  }
}
