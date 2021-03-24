const sql = require('mssql')

//'mssql://User:Password@ComputerName/\Instance/DatabaseName'
//Following example:
const config = 'mssql://sa:123456@Vinicius/\SA/company';

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};