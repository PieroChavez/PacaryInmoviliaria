const sql = require('mssql');

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // Dirección del servidor, por ejemplo, localhost o dirección IP
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // Si usas Azure, debe estar en true
    trustServerCertificate: true, // Solo si es local o no tienes certificado SSL
  },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log('Conexión a SQL Server exitosa.');
    return pool;
  })
  .catch((err) => {
    console.error('Error al conectar a SQL Server:', err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise,
};
