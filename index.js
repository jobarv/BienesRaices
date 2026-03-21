const express = require('express')

// Crear la app
const app = express()

// Definir un puerto y arrancar el proyecto

app.get('/', function (req, res) {
    res.send('Hola mundo desde Express')
});

app.get('/nosotros', function (req, res) {
    res.send('Informacion de nosotros')
});

// Definir un puerto y arrancar el proyecto

const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});