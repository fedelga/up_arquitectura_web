// Eje. de datos para las reservas
const reservas = [
    { id: 1, fecha: '2024-04-15', hora: '19:00', personas: 2, nombre: 'Luquitas Rodriguez' },
    { id: 2, fecha: '2024-04-16', hora: '20:00', personas: 4, nombre: 'German Beder' },
    { id: 3, fecha: '2024-04-16', hora: '20:00', personas: 4, nombre: 'Alfredo Montes de Oca' },
    { id: 4, fecha: '2024-04-17', hora: '18:30', personas: 3, nombre: 'Rober Galati' }
];


// Eje. de datos para los menús del restaurante
const menus = [
    { 
        items: [
            { plato: 'PIZZA', precio: 15000 },
            { plato: 'BURGER', precio: 12000 },
            { plato: 'PIZZA CON BURGER', precio: 25000 },
            { plato: 'BURGER CON PIZZA', precio: 25000 },
            { plato: 'CERVEZA ARTESANAL', precio: 5000 }
        ] 
    }
];



// Eje. de datos para las críticas y calificaciones
const criticas = [
    { autor: 'Luquitas Rodriguez', comentario: 'Excelente servicio y comida. Genios totales', calificacion: 5 },
    { autor: 'German Beder', comentario: 'Buena comida pero servicio lento', calificacion: 4 },
    { autor: 'Alfredo Montes de Oca', comentario: 'MEHHH', calificacion: 2 },
    { autor: 'Rober Galati', comentario: 'Pesimo servicio', calificacion: 1 }
];

module.exports = { reservas, menus, criticas };
