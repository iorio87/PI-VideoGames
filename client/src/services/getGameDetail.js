import axios from "axios";

const GetGameDetail = async (id ) => {    
   const response = await axios.get(`http://localhost:3001/videogame/${id}`)
   return response
}

export default GetGameDetail;