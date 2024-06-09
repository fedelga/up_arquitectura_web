const express = require('express');
const router = express.Router();
const data = require('./data'); // Importamos los datos de memo de data.js


const { reservas, menus, criticas } = require('./data'); // Data para acceder a memo


// // // RECURSOS

// Crear una nueva reserva
router.post('/reservas', (req, res) => {
    const nuevaReserva = {
        id: reservas.length + 1, // Generar un ID basado en la longitud del array
        fecha: req.body.fecha,
        hora: req.body.hora,
        personas: req.body.personas,
        nombre: req.body.nombre
    };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
});

// Obtener todas las reservas c/ filtro
router.get('/reservas', (req, res) => {
    const { fecha, hora, personas } = req.query;
    if (fecha || hora || personas) {
        let resultados = reservas.filter(reserva => {
            return (!fecha || reserva.fecha === fecha) &&
                   (!hora || reserva.hora === hora) &&
                   (!personas || reserva.personas === parseInt(personas));
        });
        res.json(resultados);
    } else {
        res.json(reservas);
    }
});

// Modificar una reserva existente, sino error
router.put('/reservas/:id', (req, res) => {
    const { id } = req.params;
    let reserva = reservas.find(r => r.id === parseInt(id));
    if (reserva) {
        reserva.fecha = req.body.fecha || reserva.fecha;
        reserva.hora = req.body.hora || reserva.hora;
        reserva.personas = req.body.personas || reserva.personas;
        reserva.nombre = req.body.nombre || reserva.nombre;
        res.json(reserva);
    } else {
        res.status(404).send('Reserva no encontrada.');
    }
});

// Cancelar una reserva, sino error
router.delete('/reservas/:id', (req, res) => {
    const { id } = req.params;
    const index = reservas.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
        reservas.splice(index, 1);
        res.status(204).send('Reserva cancelada exitosamente.');
    } else {
        res.status(404).send('Reserva no encontrada.');
    }
});

// Obtener la disponibilidad de mesas
router.get('/mesas/disponibilidad', (req, res) => {
    res.json({ disponibles: Math.floor(Math.random() * 100) + 1 });      //Random asi no creo mil en memo
});





// // // SUBRECURSOS

// Obtener el menú del restaurante
router.get('/menu', (req, res) => {
    if (menus.length > 0) {
        res.json(menus);
    } else {
        res.status(404).send('No se encontraron menús.');
    }
});

// Añadir una reseña a un restaurante
router.post('/criticas', (req, res) => {
    const { autor, comentario, calificacion } = req.body;

    // SOLO si existe una reserva para el autor, sino error
    const reservaExistente = reservas.some(reserva => reserva.nombre === autor);
    if (reservaExistente) {
        const nuevaCritica = { autor, comentario, calificacion };
        criticas.push(nuevaCritica);
        res.status(201).json(nuevaCritica);
    } else {
        res.status(403).send('No se encontró una reserva válida para este autor.');
    }
});

// Obtener todas las criticas
router.get('/criticas', (req, res) => {
    res.json(criticas);
});

// Promediar estadisticas
router.get('/criticas/estadisticas', (req, res) => {
    let sumaCalificaciones = 0;
    let cantidadCriticas = criticas.length;
    
    criticas.forEach(critica => {
        sumaCalificaciones += critica.calificacion;
    });

    let promedioCalificaciones = cantidadCriticas > 0 ? (sumaCalificaciones / cantidadCriticas).toFixed(2) : 0;

    res.json({
        cantidadCriticas: cantidadCriticas,
        promedioCalificaciones: promedioCalificaciones
    });
});




/* DEJO SIN USAR

// Crear una reserva para un grupo
router.post('/reservas/grupos', (req, res) => {
    res.send('Crear una reserva para un grupo');
});

// Obtener todas las reservas de grupos
router.get('/reservas/grupos', (req, res) => {
    res.send('Obtener todas las reservas de grupos');
});

// Actualizar la disponibilidad de mesas
router.put('/mesas/disponibilidad', (req, res) => {
    res.send('Disponibilidad de mesas actualizada.');
});

// Actualizar el menú del restaurante
router.put('/restaurantes/:restauranteId/menu', (req, res) => {
    const { restauranteId } = req.params;
    res.send(`Actualizar el menú del restaurante con ID ${restauranteId}`);
});

*/


module.exports = router; // Exportar los url
