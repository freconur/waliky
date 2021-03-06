import React, { useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import { useAuth } from "../context/AuthContext";
import { getFirestore, collection, onSnapshot} from "firebase/firestore";
import ProductCardFav from "../components/ProductCardFav";
import "../styles/productContainer.css";
import '../styles/productContainer_res.css'
import PageLoading from "./PageLoading";
const db = getFirestore(app);
const FavProducts = () => {
	
	const { user } = useAuth()
	const [favProduct, setFavProduct] = useState([])
	const [loading, setLoading] = useState(false)
	const colRef = collection(db, `userName/${user.uid}/favProduct`)

	const getProduct =   () => {
		  onSnapshot(colRef, (snapshot) => {
			let favoritos = [];
			snapshot.docs.forEach((doc) => {
				favoritos.push({...doc.data(), id: doc.id})
			})
			setFavProduct(favoritos)
		})
	  };
	useEffect(() => { 
		getProduct();
		setLoading(false)
	},[]);
	return (
		<div className="container__prod">
			<h1 className="product__title">Mis favoritos</h1>
			<div className='product__container'>
				{loading && <PageLoading/>}
				<ul className="container__products">
				{favProduct.map((prod) => (
				<ProductCardFav key={prod.id} prod={prod} />
				))}
				</ul>
			</div>
		</div>
	);
};

export default FavProducts;
