const express = require('express');
const { enviarMensaje } = require('../controllers/contactoController');
const router = express.Router();

// Ruta para enviar mensajes
router.post('/', enviarMensaje);

module.exports = router;
