import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import "../styles/whatsappIcon.css"
const ButtonWhatsapp = () => {
  return (
    <a href="https://wa.me/+51982752688?text=Me%20interesa" className='buttonWhatsapp' target="blank">
        <FontAwesomeIcon  
        className="buttonWhatsappIcon"
        icon={faWhatsapp} 
        />
    </a>
  )
}

export default ButtonWhatsapp