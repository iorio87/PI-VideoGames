require('dotenv').config();
const { API_KEY  } = process.env;
const { Videogame, Genre } = require('../db.js');
const axios = require('axios')

const getApiGames = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const games = await response.data.results.map(e => {
        return {
            id: e.id,
            name: e.name,
            released: e.released,
            rating: e.rating,
            image: e.background_image,
            platforms: e.platforms.map(e => e.platform.name),
            genres: e.genres.map(e => e.name)
        }
    })
    return games
}

const getDBGames = async () => {
    const games = await Videogame.findAll({
        includes: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return games
}

const getAllgames = async () => {
    const apiGames = await getApiGames()
    const dbGames = await getDBGames()
    const allGames = [...apiGames, ...dbGames]   

    return allGames
}

const getGameById = async (id) => {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const g = response.data
    const game = {
        name: g.name,
        image: g.background_image,
        description: g.description,
        released: g.released,
        rating: g.rating,
        platforms: g.platforms.map(e => e.platform.name),
        genres: g.genres.map(e => e.name)

    }
    return game
}

const getGameByName = async(name) =>{
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
    //const filterGames = games.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    const games = await response.data.results
    return games.slice(0, 15) //lo limito a 15 resultados
}

const getGenres = async()=> {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = response.data.results.map(e => {return e.name})
    return genres
}

module.exports = { getAllgames, getGameById, getGameByName, getGenres };