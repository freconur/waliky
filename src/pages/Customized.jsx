import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import "../styles/productContainer.css";
import '../styles/productContainer_res.css'
import PageLoading from "./PageLoading";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../firebase/firebase.config';

const db = getFirestore(app)

const Customized = () => {
    const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    const item = await getDocs(collection(db, "personalizados"));
    const docs = [];
    item.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      setProduct(docs);
    });
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true)
    getProduct();
  }, []);
  if (!product) {
    return null;
  }
  return (
    <React.Fragment>
      <div>
      <div className="container__prod">
        <h1 className="product__title">Personalizados</h1>
        <div className='product__container'>
          {loading && <PageLoading/>}
            <ul className="container__products">
              {product.map((prod) => (
                <ProductCard key={prod.id} prod={prod} />
              ))}
            </ul>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default Customized