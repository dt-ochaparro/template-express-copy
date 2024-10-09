const { appDataSource } = require('../../../../database/typeOrm/sap')
module.exports = async ({ id }) => {
  console.log('repository ---> ', id)
  const con = await appDataSource
  let where = ''
  if (id) {
    where += `AND (LOWER("ItemCode") LIKE LOWER('${id}%')  OR LOWER("ItemName") LIKE LOWER('${id}%'))`
  }
  const sql = `
    SELECT
      "ItemCode",
      "ItemName",
      CAST("LastPurPrc" AS INT) "LastPurPrc"
    FROM
      PRUEBAS_PHARMA."OITM"
    WHERE
      "frozenFor" = 'N' ${where}
    LIMIT 100
  `
  return con.query(sql)
}
