import React from "react";
import { NavLink } from "react-router-dom";
import "./game.css";

function Game({ name, image, id, genres, rating }) {
  return (
   
    // otra card
    <NavLink to={`detail/${id}`} className="">
      <div className="card-wrapper">
        <div className="card-container">
          <div className="card-image">
            <div className="city">
              <img
                src={
                  image
                    ? image
                    : "https://thumbs.dreamstime.com/b/video-game-controller-6048794.jpg"
                }
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="story">
              <div className="info">
                <h4 className="card-name">{name}</h4>
                <p className="genero">Generos:</p>
                {genres.map((e) => (
                  <li key={e} className="generos">
                    {e}{" "}
                  </li>
                ))}
                <div className="hr">
                <hr/>
                </div>
                <p className="rating">Rating: {rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Game;
