const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Estructura de datos para almacenar las tareas en memoria
let tareas = [];
let idCounter = 1;

// Ruta para crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { nombre, completada = false } = req.body;
    if (!nombre) {
        return res.status(400).json({ error: 'El nombre de la tarea es obligatorio' });
    }
    const nuevaTarea = {
        id: idCounter++,
        nombre,
        completada,
        fechaCreacion: new Date()
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Ruta para leer todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Ruta para leer una tarea específica por su ID
app.get('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json(tarea);
});

// Ruta para actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
    const { nombre, completada } = req.body;
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    if (nombre !== undefined) tarea.nombre = nombre;
    if (completada !== undefined) tarea.completada = completada;
    res.json(tarea);
});

// Ruta para eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
    const index = tareas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    tareas.splice(index, 1);
    res.status(204).send();
});

// Ruta para calcular estadísticas sobre las tareas
app.get('/estadisticas', (req, res) => {
    const totalTareas = tareas.length;
    const tareaMasReciente = tareas.reduce((reciente, tarea) => {
        return !reciente || tarea.fechaCreacion > reciente.fechaCreacion ? tarea : reciente;
    }, null);
    const tareaMasAntigua = tareas.reduce((antigua, tarea) => {
        return !antigua || tarea.fechaCreacion < antigua.fechaCreacion ? tarea : antigua;
    }, null);
    const cantidadCompletadas = tareas.filter(t => t.completada).length;
    const cantidadPendientes = totalTareas - cantidadCompletadas;

    res.json({
        totalTareas,
        tareaMasReciente: tareaMasReciente ? tareaMasReciente.nombre : null,
        tareaMasAntigua: tareaMasAntigua ? tareaMasAntigua.nombre : null,
        cantidadCompletadas,
        cantidadPendientes
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});
