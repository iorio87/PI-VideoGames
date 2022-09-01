import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import "./detail.css";

function Detail() {  
  const [game, setgame] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "SHOW_LOADER" });
    axios.get(`http://localhost:3001/videogame/${id}`).then((detail) => {
      setgame(detail.data);
      dispatch({ type: "HIDE_LOADER" });
    });
  }, [dispatch, id]);

  return (    

    
    <div className="detail-container">
      {loading && <Loader className="loader" />}

      {game && (
        <div className="btn-volver">
          <a className="eightbit-btn--reset font" href="/home">
            volver
          </a>

          <div id="container">
            <>
              <div class="product-details">
                <h1>{game.name}</h1>

                <p class="information">
                  " {game.description.replace(/(<([^>]+)>)/gi, "")} "
                </p>
              </div>

              <div class="product-image">
                <img
                  src={
                    game.image
                      ? game.image
                      : "https://www.collinsdictionary.com/images/full/videogame_634861250_1000.jpg"
                  }
                  alt=""
                />

                <div className="detail-info">
                  <h2>Informacion:</h2>
                  <ul>
                    <li>
                      <strong>Fecha de Lanzamiento: </strong>
                      {game.released}
                    </li>
                    <li>
                      <strong>Rating: </strong>
                      {game.rating}
                    </li>
                    <li>
                      <strong>ID: </strong>
                      {id}
                    </li>
                    <li>
                      <strong>Plataformas: </strong>
                      {game.platforms.map((e) => (                     
                        <p key={e} className="plataformas">
                          {e}
                        </p>                   
                        
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
