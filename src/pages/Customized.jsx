import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/productContainer.css";
import "../styles/productContainer_res.css";
import PageLoading from "./PageLoading";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { query, orderBy, startAfter, limit } from "firebase/firestore";
import app from "../firebase/firebase.config";
import CategoryList from '../components/CategoryList';
import InfiniteScroll from "react-infinite-scroll-component";
const db = getFirestore(app)
const Customized = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([])
  const [activeCollection, setActiveCollection] = useState(true)
  const [lastVisible, setLastVisible] = useState(null);
  const [newCategory, setNewCategory] = useState([])
  const [after, setAfter] = useState(0)
  const [allProducts, setAllProducts] = useState([])

  const getCategory = async() => {
    const item = await getDocs(collection(db,"personalizados"))                       
    const category = []
    item.forEach(doc =>  {
      category.push(doc.data().category)
    })
    const categoryFilter = [...new Set(category)]
    setCategory(categoryFilter)
  }
  const getAllProduct = async () => {
    const allItem = await getDocs(collection(db,"personalizados")); 
    const allProduct = []
    allItem.forEach(doc =>  {
      allProduct.push({ ...doc.data(), id: doc.id })
    })
    setAllProducts(allProduct)
  }
  const getProduct = async () => {
    const collectionLimit = query(collection(db, "personalizados"),
                            orderBy('name'), 
                            startAfter( lastVisible ),  
                            limit(15));
    const item = await getDocs(collectionLimit);
    const docs = [];
    item.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setAfter(item)
    setProduct(e => e.concat(docs));
    getAllProduct()
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    getCategory()
    getProduct();
  }, [lastVisible]);
  function handleCategory(e){
    const { name } = e.target    
    const categoryProduct = allProducts.filter( cat => cat.category === name)
    // const categoryProduct = product.filter( cat => cat.category === name)
    setNewCategory(categoryProduct)
    setActiveCollection(false)
  }
  const infiniteScroll = () => {
    setLastVisible(after.docs[after.docs.length - 1] || null) 
  }
  // const handleAllCategorys = () => {
  //   setActiveCollection(true)
  //   getProduct()
  // }
  if (!product) {
    return null;
  }
  return (
    <React.Fragment>
      <div>
      <div className="container__prod">
        <h1 className="product__title">Personalizados</h1>
        <div className='product__container'>
        <div className="categoryFilter__button">
          {/* <div className="category__all" onClick={handleAllCategorys}><span>Todos</span></div> */}
          <CategoryList 
          category={category} 
          product={product} 
          handleCategory={handleCategory} 
          handleAllCategorys={handleAllCategorys} />
        </div>
          
          {/* //esto es para todos los productos de la collection */}
          
          <InfiniteScroll 
              dataLength={product.length}
              hasMore={true}
              next={infiniteScroll}
              >
          { activeCollection && 
            <ul className="container__products">
              {product.map((prod) => (
                <ProductCard key={prod.id} prod={prod} />
              ))}
            </ul>
          }
          </InfiniteScroll>
          {loading && <PageLoading/>}
{/* //esto es para las categorias filtrdas */}
          { !activeCollection && 
            <ul className="container__products" >
            {newCategory.map(prod => (
              <ProductCard key={prod.id} prod={prod} />
              ))}
          </ul>
          }
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Customized;