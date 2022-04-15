import React from 'react';
import '../styles/Contacto.css'
import SocialMedia from '../components/SocialMedia';

const Contacto = () => {
  return (
    <div className='Contacto'>
      <div className='Contacto__container'>
      <h1 className='Contacto__title'>Contactanos</h1>
      <p className='Contacto__info'>Para cualquier duda o pregunta, pueden cumicarse con nosotros a traves del chat de whatsapp. Solo de click al boton de abajo a la derecha, le responderemos lo mas pronto posible.</p>
      <p className='Contacto__info'>También puede usar nuestros canales de redes sociales que también estamos pendiente de los mensajes y comentarios de nuestros clientes.</p>
     <SocialMedia/>
      </div>
    </div>
  )
}

export default Contacto