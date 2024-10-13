const express = require('express');
const app = express();

// Configuramos una ruta simple
app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Node.js!');
});

// Iniciamos el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
