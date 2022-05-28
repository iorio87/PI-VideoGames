const { Router } = require('express');
const express = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogame = require('./videogames.js')
const genres = require('./genres.js')


const router = Router();

router.use(express.json())


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', videogame);
router.use('/genres', genres);


module.exports = router;


