import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Personalizados.css"
import personalizadoImage1 from '../assets/images/adriana.jpg'
import personalizadoImage3 from '../assets/images/erika.jpg'
import personalizadoImage2 from '../assets/images/marlene.jpg'
const Personalizados = () => {
  return (
    <div className="personalizados">
        <div className="personalizados__container">
            <h1 className="personalizados__title">Nuestros Productos personalizados</h1>
            <p className="personalizados__text">
                Hola, te queremos presentar nuestra seccion de produtos personalizados en sublimados. La personalizacion de sublimados consta en crear un producto sublimado con tus preferencias, ya sea que quieres tener una tazas con la foto de perrito o gatito o tener siempre a la vista a tu familia en el cojin de tu cama, lo que se te ocurra estamos seguros que podemos plasmarlo en cualquiera de nuestros productos sublimados que pueden ser bien, tazas, cojines, polos, llaveros(en cojines), padmouse y medias.
            </p>
            <p className="personalizados__text">Quieres hacerte una idea de como se verian nuestros productos personalizados, aquí te dejo algunos, echales un ojo.</p>
            <div className="personalizados__images--container">
                <div className="personalizados__images">
                    <img src={personalizadoImage1} alt="imagen personalizado" />
                </div>
                <div className="personalizados__images">
                    <img src={personalizadoImage2} alt="imagen personalizado" />
                </div>
                <div className="personalizados__images">
                    <img src={personalizadoImage3} alt="imagen personalizado" />
                </div>
            </div>
            <p className="personalizados__text">mira todos nuestros productos personalizados dando <Link to="/customized">click aqui</Link> </p>
            <p className="personalizados__text">
                Por mas excentrica, sea cual sea tu idea , no lo dudes, contactanos y cuentanos lo que tienes en mente, estamos seguros que podemos ayudarte. Para mas informacion puedes escribirnos en nuestras redes sociales o directamente en el whatsapp, para hacerlo, dale click al boton de whatsapp de la derecha.
            </p>
            <h2 className="personalizados__title">¿Necesitas varios productos sublimados personalizados para algun evento en especial?</h2>
            <p className="personalizados__text">
                Si lo que necesitas no es solo uno, sino varios productos con un mismo diseño, para una festividad y entregarlo como recuerdo, tambien podemos hacerlo posible, como ya sabes para saber mas dale click al boton verde de alla abajo.
            </p>
            <h2 className="personalizados__title">
                ¿Porque tener un producto personalizado es mejor?
            </h2>
            <p className="personalizados__text">
                Es genial demostrar a las personas lo mucho que nos puede gustar una serie, o si somos fan de algun actor o una saga de peliculas, así que como dice la frase, dime que te gusta sin decirme que te gusta, ustedes entienden, pero el personalizar tiene un objetivo mas allá que solo presumir, y si, esa es la palabra, porque a quien no le gusta hacerlo. Pero al personalizar una taza con un mensaje que nos motive a seguir todos los dias con nuestra meta, que fuese cual fuese,  este toma otro significado y aunque parezca algo superficial, puede llegar a tomar algun valor en un punto de nuestra vida, lo material es solo eso, materia, pero el mensaje es algo que nos llena y llevamos con nosotros mismos, solo piensa en algo que quisieras decirle a esa persona especial para ti. Bueno no quiero expandirme mas, pero si querias una razon de porque deberias tener o quiza regalar taza sublimada, Ahora ya la tienes y no lo pienses mas,PERSONALIZA LA TUYA.
            </p>

        </div>
    </div>
  )
}

export default Personalizados