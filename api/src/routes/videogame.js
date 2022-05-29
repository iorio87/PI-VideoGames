const { Router } = require('express');
const router = Router();
const { Videogame } = require('../db.js');
const {getGameById} = require('./funciones.js')

router.get('/:id', async (req, res) => {
    const { id } = req.params   
    const game = await getGameById(id)    
    res.send(game)  
})

router.post('/', async (req, res) => {
    const { name, description, platforms } = req.body;
    if (!name || !description || !platforms) return res.status(404).send('Falta enviar datos obligatorios')
    try {
        const videogame = await Videogame.create(req.body)
        return res.status(201).send(videogame)
    } catch (err) {
        return res.status(404).send('Error en alguno de los datos provistos')
    }
})


module.exports = router;