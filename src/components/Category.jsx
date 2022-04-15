import React from "react";
import { Link } from "react-router-dom";
import "../styles/Category.css";
import "../styles/Category_responsive.css";
import tazasCategory from "../assets/images/tazasCategory.jpg";
import cojinCategory from "../assets/images/cojinCategory.jpg";
import polosCategory from "../assets/images/polosCategory.jpg";
const Category = () => {
  return (
    <React.Fragment>
      <div className="category">
        <h2 className="category__title">SUBLIMADOS</h2>
        <section className="category__container">
          <Link to="/tazas" className="card__category">
            <div className="overlay__category"></div>
            <span className="category__name">Tazas</span>
            <img className="category__image" src={tazasCategory} alt="tazas" />
            {/* <span>Tazas</span> */}
          </Link>
          <Link to="/cojin" className="card__category">
            <div className="overlay__category"></div>
            <span className="category__name">Cojin</span>
            <img className="category__image" src={cojinCategory} alt="cojin" />
          </Link>
          <Link to="/polos" className="card__category">
            <div className="overlay__category"></div>
            <span className="category__name">Polos</span>
            <img className="category__image" src={polosCategory} alt="polos" />
          </Link>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Category;
