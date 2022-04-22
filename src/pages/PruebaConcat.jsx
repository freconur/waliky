import React, { useState, useEffect } from "react";
import app from "../firebase/firebase.config"
import { getFirestore, collection, getDocs, query, orderBy, startAfter, limit} from "firebase/firestore";
import ProductCard from "../components/ProductCard";
import "../styles/productContainer.css";
import '../styles/productContainer_res.css'
import PageLoading from "./PageLoading";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryList from "../components/CategoryList";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
const db = getFirestore(app)
const PruebaConcat = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [after, setAfter] = useState(0)

  const getProduct = async() => {
    const collectionLimit = query(collection(db, "tazas"),
                            orderBy('name'), 
                            startAfter( lastVisible ),  
                            limit(15));
    const item = await getDocs(collectionLimit);
    const docis = [];
    item.forEach((doc) => {
      docis.push({ ...doc.data(), id: doc.id });
    });
    setAfter(item)
    console.log(lastVisible)
    setProduct( e => e.concat(docis))
    setLoading(false)
  };
  const infiniteScroll = () => {
    setLastVisible(after.docs[after.docs.length-1])
    
  }
  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [lastVisible]);
  if (!product) {
    return null;
  }
  return (
    <React.Fragment>
      <div>
        <div className="container__prod">
          <h1 className="product__title">Personalizados</h1>
          <div className="product__container">
            
            <InfiniteScroll
              dataLength={product.length}
              hasMore={true}
              next={infiniteScroll}
              // next={() => setProductLimit(null)}
            >
              <ul className="container__products">
                {product.map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
              </ul>
            </InfiniteScroll>
            {loading && <PageLoading />}
            {/* <button onClick={handleClick}>cargar mas</button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PruebaConcat;
