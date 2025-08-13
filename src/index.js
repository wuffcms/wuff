require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta de prueba
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Wuff está vivo 🐶' });
});

// Ruta raíz (opcional, ya sirve index.html si está en public)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Wuff corriendo en http://localhost:${PORT}`);
});
