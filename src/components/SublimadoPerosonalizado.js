import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/sublimadosPersonalizados.css"
import "../styles/sublimadosPersonalizados_res.css"
import sublimadoPersonalizadoImage from '../assets/images/sublimadoPersonalizado.png'
const SublimadoPerosonalizado = () => {
  return (
    <div className="container__sublimadosPersonalizados">
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 114"><path fill="#ffff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,48C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="sublimadosPersonalizados__info--container">
        <div className="sublimadosPersonalizados__info">
      <h2 className="title__sublimadosPersonalizados">SUBLIMADOS PERSONALIZADOS</h2>
          <p className="parrafo__sublimadosPersonalizados">
         
          Quieres algo especial para esa persona especial.<br/>
          Ahora puedes crear el regalo perfecto.
          </p>
          <Link to="/personalizados" className="sublimadosPersonalizados__callToAction">
            ¡QUIERO UNO!
          </Link>
          {/* <a href="https://wa.me/+51982752688?text=Me%20interesa" className="sublimadosPersonalizados__callToAction" target="blank">
            ¡QUIERO UNO!
          </a> */}
          <Link className="sublimadosPersonalizados__learnMore" to="/personalizados">
            Leer más
          </Link>
        </div>
        <div className="sublimadosPersonalizados__image--container">
          <img className="sublimadosPersonalizados__image" src={sublimadoPersonalizadoImage} alt="personalizados" />
        </div>
      </div>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 105"><path fill="#ffff" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,48C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
  )
}

export default SublimadoPerosonalizado