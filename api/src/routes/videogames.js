const { Router } = require('express');
const router = Router();
const { Videogame, Genre } = require('../db.js');
const axios = require('axios')

const getApiGames = async () => {
    const response = await axios.get('https://api.rawg.io/api/games?key=fe468bbaf1df47e49f303405a20941cf')
    const games = await response.data.results.map(e => {
        return {
            id: e.id,
            name: e.name,
            realesed: e.realesed,
            rating: e.rating,
            image: e.background_image,
            platforms: e.platforms.map (e => e),
            genres: e.genres.map(e => e)
        }
    })
    return games
}

const getDBGames = async () => {
    const games = await Videogame.findAll({
        includes:{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return games
}

const getAllgames = () => {
    const apiGames = getApiGames()
    const dbGames = getDBGames()
    const allGames = [...apiGames, ...dbGames]
    
    return allGames
}

router.get('/', async (req, res) => {
    const games = await getApiGames()
    res.send(games)
})

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