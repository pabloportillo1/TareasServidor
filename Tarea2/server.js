const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// GET /contacto
app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contacto.html'));
});

// POST /contacto → requerido por la actividad
app.post('/contacto', (req, res) => {
  // FormSubmit maneja el envío directo desde el navegador
  // Esta ruta existe para cumplir el requerimiento de la actividad
  res.sendFile(path.join(__dirname, 'views', 'confirmacion.html'));
});

// GET /confirmacion → a donde redirige FormSubmit tras el envío
app.get('/confirmacion', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'confirmacion.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});