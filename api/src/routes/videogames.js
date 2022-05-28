const { Router } = require('express');
const router = Router();
const { Videogame } = require('../db.js');

router.post('/', async (req, res) => {
    const {name, description, platform} = req.body;
    if(!name || !description || !platform) return res.status(404).send('Falta enviar datos obligatorios')
    try {
        const videogame = await Videogame.create(req.body)
        return res.status(201).send(videogame)
    } catch (err) {
        return res.status(404).send('Error en alguno de los datos provistos')
    }
})


module.exports = router;