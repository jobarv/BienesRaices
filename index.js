import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'


// Crear la app
const app = express()

// Routing
app.use('/auth', usuarioRoutes)

// Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta Publica
app.use(express.static('public'))

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
