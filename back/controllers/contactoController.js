const { poolPromise } = require('../config/db');

// Controlador para enviar un mensaje
const enviarMensaje = async (req, res) => {
  const { nombres, telefono, email, mensaje } = req.body;

  if (!nombres || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos marcados son obligatorios.' });
  }

  try {
    const pool = await poolPromise;
    const query = `
      INSERT INTO Contactos (Nombres, Telefono, Email, Mensaje)
      VALUES (@nombres, @telefono, @correo, @mensaje)
    `;
    await pool.request()
      .input('nombres', sql.VarChar, nombres)
      .input('telefono', sql.VarChar, telefono)
      .input('correo', sql.VarChar, email)
      .input('mensaje', sql.Text, mensaje)
      .query(query);

    res.status(200).json({ message: 'Mensaje enviado y almacenado con éxito.' });
  } catch (error) {
    console.error('Error al insertar mensaje:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje.' });
  }
};

module.exports = { enviarMensaje };
