const express = require('express');
const app = express();


    // Recursos el softw del restaurante

// Crear una nueva reserva
app.post('/reservas', (request, response) => 
{
    response.send('Crear una nueva reserva');
});

// Obtener todas las reservas
app.get('/reservas', (request, response) => 
{
    response.send('Obtener todas las reservas');
});

// Modificar una reserva existente
app.put('/reservas/:id', (request, response) => 
{
    const { id } = request.params;
    response.send(`Modificar la reserva con ID ${id}`);
});

// Cancelar una reserva
app.delete('/reservas/:id', (request, response) => 
{
    const { id } = request.params;
    response.send(`Cancelar la reserva con ID ${id}`);
});



// Obtener la disponibilidad de mesas
app.get('/disponibilidad', (request, response) => 
{
    response.send('Ver disponibilidad de mesas');
});

// Actualizar la disponibilidad de mesas
app.put('/disponibilidad', (request, response) => 
{
    response.send('Actualizar disponibilidad de mesas');
});


/*
let reservas = [
    { id: 1, fecha: '2024-05-01', hora: '19:00', personas: 2, nombre: 'Juancito Perez' },
    { id: 2, fecha: '2024-06-19', hora: '20:00', personas: 4, nombre: 'Toni Gambino'},
    { id: 3, fecha: '2024-02-02', hora: '21:00', personas: 3, nombre: 'Eduardo Casanova' }
];
*/

// Ruta para buscar reservas con filtros
app.get('/reservas/busqueda', (request, response) => 
{
    const { fecha, hora, personas } = request.query;
    
    // Filtro reservas segun los parametros del get
    let resultados = reservas.filter(reserva => 
    {
        return (!fecha || reserva.fecha === fecha) &&
               (!hora || reserva.hora === hora) &&
               (!personas || reserva.personas === parseInt(personas));
    });

    // Devuelvo reservas filtradas
    response.json(resultados);
});



    // Subrecurso para reservas de grupos

// Crear una reserva para un grupo
app.post('/reservas/grupos', (request, response) => 
{
    response.send('Crear una reserva para un grupo');
});

// Obtener todas las reservas de grupos
app.get('/reservas/grupos', (request, response) => 
{
    response.send('Obtener todas las reservas de grupos');
});



    // Subrecursos para los menús del restaurante

// Obtener el menú del restaurante
app.get('/restaurantes/:restauranteId/menu', (request, response) => 
{
    const { restauranteId } = request.params;
    response.send(`Obtener el menú del restaurante con ID ${restauranteId}`);
});

// Actualizar el menú del restaurante
app.put('/restaurantes/:restauranteId/menu', (request, response) => 
{
    const { restauranteId } = request.params;
    response.send(`Actualizar el menú del restaurante con ID ${restauranteId}`);
});



    // Subrecursos para las criticas y calificaciones de los clientes

// Añadir una reseña a un restaurante
app.post('/restaurantes/:restauranteId/criticas', (request, response) => 
{
    const { restauranteId } = request.params;
    response.send(`Añadir reseña al restaurante con ID ${restauranteId}`);
});

// Obtener reseñas de un restaurante
app.get('/restaurantes/:restauranteId/criticas', (request, response) => 
{
    const { restauranteId } = request.params;
    response.send(`Obtener reseñas del restaurante con ID ${restauranteId}`);
});


