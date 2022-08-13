import React from 'react'
import './loader.css'
import PacmanLoader from "react-spinners/PacmanLoader";

function Loader() {
  return (
    <div className="loader-container">

      <PacmanLoader color={'#fdff00'} loading={true} size={50} />

      {/* <div className='lds-dual-ring posicion'></div> */}
    </div>
  )
}

export default Loader