import express, { Router } from 'express';

const router = express.Router();


router.get('/login', (req, res) => {
    res.render('auth/login', {
        autenticado: true
    })
});

export default router