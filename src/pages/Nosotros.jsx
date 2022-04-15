import React from "react";
import "../styles/Nosotros.css"
const Nosotros = () => {
  return (
    <div className="Nosotros">
      <div className="Nosotros__container">
        <h1 className="Nosotros__title">Nosotros</h1>
        <p className="Nosotros__info">
          Waliky como nos decidimos nombrar. Somos un emprendimiento dedicado al
          diseño y venta de productos sublimados prediseñados y personalizados.
          También Realizamos ventas de productos decorativos para ocasiones festivas como
          cumpleaños niños y adultos, día de la madre, del padre, 28 julio. etc.
          Como última actividad, nos dedicamos al desarrollo de paginas web como
          esta.
        </p>
      </div>
      {/* <p className="Nosotros__info">
        Somos un emprendimiento dedicado al diseño y venta de productos
        sublimados prediseñados y personalizados.
      </p>
      <p className="Nosotros__info">
        También Realizamos ventas de productos para ocasiones festivas como
        cumpleaños niños y adultos, día de la madre, del padre, 28 julio. etc.
      </p>
      <p className="Nosotros__info">
        Como última actividad, nos dedicamos al desarrollo de paginas web como esta.
      </p> */}
    </div>
  );
};

export default Nosotros;
