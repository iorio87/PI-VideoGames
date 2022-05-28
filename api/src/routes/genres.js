const { Router } = require('express');
const router = Router();
const { Genre } = require('../db.js');


// router.get('/', async(req, res) => {
//     const genres = await Genre.findAll()
//     res.json(genres)
// })

router.post('/', async (req, res) => {
    const {name, id} = req.body;
    if(!name || !id) return res.status(404).send('Falta enviar datos obligatorios')
    try {
        const genre = await Genre.create(req.body)
        return res.status(201).send(genre)
    } catch (err) {
        return res.status(404).send('Error en alguno de los datos provistos')
    }
})

module.exports = router;