import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import app from '../firebase/firebase.config';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app)
const ProductId = () => {
    const {productId} = useParams();
    console.log("id" ,productId);
    const [produ, setProdu] = useState([]);
    // const [produ, setProdu] = useState(null);

    const getProduct = async() => {
      const item = await getDocs(collection(db, "cojines"));
      const docs = [];
      item.forEach((doc) => {
       docs.push({...doc.data(), id: doc.id} );
      });
      const newProduct = docs.find((item) => item.id === productId);
      setProdu(newProduct)
    };

    useEffect(() => {
      getProduct();
    }, []);

   
    if (!produ) {
      return null;
    }
    // if(produ === true)
    
  return (
    <div>
      product details
      <div>
        <h1>{produ.id}</h1>
        <img src={produ.image}  alt={produ.name}/>
      </div>
    </div>
  )
}

export default ProductId