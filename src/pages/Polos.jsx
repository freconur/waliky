import React, {useState, useEffect} from 'react'
import app from "../firebase/firebase.config"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ProductCard from '../components/ProductCard'
import "../styles/productContainer.css";
import '../styles/productContainer_res.css'
import PageLoading from './PageLoading'
import CategoryList from '../components/CategoryList';
const db = getFirestore(app);
const Polos = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([])
  const [activeCollection, setActiveCollection] = useState(true)
  const [newCategory, setNewCategory] = useState([])
  
  const getProduct = async() => {
    const item = await getDocs(collection(db, "polos"));
    const docs = [];
    const category = []
    item.forEach(doc =>  {
      category.push(doc.data().category)
    })
    item.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id});
      setProduct(docs);
    });
    const categoryFilter = [...new Set(category)]
  setLoading(false)
  setCategory(categoryFilter)
  };
  useEffect(() => {
    setLoading(true)
    getProduct();
  }, []);

  function handleCategory(e){
    const { name } = e.target    
    const categoryProduct = product.filter( cat => cat.category === name)
    setNewCategory(categoryProduct)
    setActiveCollection(false)
  }
  const handleAllCategorys = () => {
    setActiveCollection(true)
    getProduct()
  }
  if (!product) {
    return null;
  }
  return (
      <>
        <div className="container__prod" >
          <h1 className="product__title">Polos</h1>
          <div className='product__container'>
          <div className="categoryFilter__button">
            {/* <div className="category__all" onClick={handleAllCategorys}><span>Todos</span></div> */}
            <CategoryList category={category} product={product} handleCategory={handleCategory} handleAllCategorys={handleAllCategorys}/>
          </div>
            {loading && <PageLoading/>}

            { activeCollection && 
            <ul className="container__products" >
              {product.map((prod) => (
                <ProductCard key={prod.id} prod={prod} />
              ))}
            </ul>
            }

            { !activeCollection && 
              // <ul className="productFilter__container">
              <ul className="container__products" >
              {newCategory.map(prod => (
                <ProductCard key={prod.id} prod={prod} />
                ))}
              </ul>
              }
          </div>
        </div>
      </>
  )
}

export default Polos
