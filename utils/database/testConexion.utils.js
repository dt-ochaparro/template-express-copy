const testDb = require('../../database/config')
const dayjs = require('dayjs')
const chalk = require('chalk')
chalk.level = 3 // Forzar a usar colores completos

module.exports = async () => {
  try {
    // Recorrer testDb y probar la conexión a cada base de datos
    for (const db in testDb) {
      if (testDb[db].options.host) {
        await testDb[db].sequelize.authenticate()
        console.log(chalk.blue(`[Sequelize] Conexión: ${db} --- Database: ${testDb[db].options.database} --- Fecha Hora: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`))
        console.log(chalk.green('La conexión se ha establecido correctamente.'))
      }
    }
  } catch (error) {
    console.error(chalk.red('No se puede conectar a la base de datos: '), chalk.red(error))
  }
}
