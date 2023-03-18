import express from 'express';

const router = express.Router();

//Routing
router.get('/', (req, res) => {
    res.send('Hola Mundo en express')
});

router.post('/', (req, res) => {
    res.json({ msg: 'Respuesta de Tipo Post' })
});
/* router.route('/')
    .get(function (req, res) => {
        res.send('Hola Mundo en express')
    })
    
    .post(function (req, res) {
        res.json({ msg: 'Respuesta de Tipo Post' })
    }) */

export default router