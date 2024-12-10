const obtenerMensajes = async (req, res) => {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query('SELECT * FROM Contactos');
      res.status(200).json(result.recordset);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
      res.status(500).json({ error: 'Error al obtener los mensajes.' });
    }
  };
  
  module.exports = { enviarMensaje, obtenerMensajes };
  