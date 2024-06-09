const express = require('express');
const app = express();
const moment = require('moment'); // Para el log, sacarlo sino.

// Middleware para parsear el body como JSON
app.use(express.json());


// Middleware para loguear las peticiones
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);
    next();
});


const routes = require('./routes'); // Importar las rutas de la API
app.use(routes); // Montar las rutas en la app


// Ruta inicial
app.get('/', (req, res) => {
    res.send(
        `<html>
            <head><title>API de Reservas de Restaurante</title></head>
            <body>
                <h1>Bienvenido a esta API de Reservas de Restaurante</h1>
            </body>
        </html>`
    );
});


// Iniciar servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('API de reservas de restaurante en ejecución...');
});
