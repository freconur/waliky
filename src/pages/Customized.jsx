import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/productContainer.css";
import "../styles/productContainer_res.css";
import PageLoading from "./PageLoading";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { query, orderBy, startAfter, limit } from "firebase/firestore";
import app from "../firebase/firebase.config";
import InfiniteScroll from "react-infinite-scroll-component";
const db = getFirestore(app);

const Customized = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productLimit, setProductLimit] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [concat, setConcat] = useState([])
  const [cantidad, setCantidad] = useState([]);

  const getProduct = async () => {
    const collectionLength = await getDocs(collection(db, "personalizados"));
    setCantidad(collectionLength);
    //-->para que me aparezca los items limitados
    const collectionLimit = query(collection(db, "personalizados"), limit(3));
    console.log("collectionLength:", collectionLength.docs.length);
    const item = await getDocs(collectionLimit);
    setProductLimit(item);
    const docs = [];
    console.log("item", item);
    item.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    // -->aqui termina lo item limnitados
    console.log(docs)
    setProduct(docs);
    setLoading(false);
  };
  // console.log("length", product.length)
  const handleScroll = async () => {
    //-->cuanta los items que se imprimio en la peticion anterior
    const lastVisible = productLimit.docs[productLimit.docs.length - 1];
    console.log("last", lastVisible);
    //-->sirve para mandar a traer losa items apartir de donde se dejo el anterior
    const next = query(
      collection(db, "personalizados"),
      startAfter(lastVisible),
      limit(3)
    );
    const itemsAfter = await getDocs(next);
    console.log("next", itemsAfter);
    const docsAfter = [];

    itemsAfter.forEach((doc) => {
      docsAfter.push({ ...doc.data(), id: doc.id });
    });
    if (product.length < cantidad.docs.length) {
      setProduct(e => e.concat(docsAfter));
    }
    // setProductAdd(docsAfter)\
    // debugger
    console.log("productoTotal:",product)
    console.log("product",product.length)
    console.log(cantidad.docs.length)
    // debugger
    // setLoading(false)
  };
  useEffect(() => {
    setLoading(true);
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
          <div className="product__container">
            {loading && <PageLoading />}
            <InfiniteScroll
              dataLength={product.length}
              hasMore={hasMore}
              next={handleScroll}
            >
              <ul className="container__products">
                {product.map((prod) => (
                  <ProductCard key={prod.id} prod={prod} />
                ))}
              </ul>
            </InfiniteScroll>
            {/* <button onClick={handleClick}>cargar mas</button> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Customized;
