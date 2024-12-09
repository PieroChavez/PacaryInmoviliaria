const mongoose = require('mongoose');

const ContactoSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  telefono: { type: String },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
});

module.exports = mongoose.model('Contacto', ContactoSchema);
