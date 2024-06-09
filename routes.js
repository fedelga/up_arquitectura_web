const express = require('express');
const router = express.Router();
const endpoints = require('./endpoints'); // Importar el archivo de endpoints


router.use('/', endpoints); // Utilizar el router de endpoints para manejar las rutas de la API

module.exports = router;
