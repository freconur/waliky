import React, { useState } from 'react'
import app from '../firebase/firebase.config'
import { Link } from 'react-router-dom'
// import favProductIcon from '../assets/icons/heart.png'
import { getFirestore, collection, query, getDocs, doc, setDoc  } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons'
import "../styles/ProductCard.css"
import ModalProduct from "../Modals/ModalProduct"
import swal from 'sweetalert';
const db = getFirestore(app)
const ProductCard = ({prod}) => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [likeButton, setLikeButton] = useState(false)

  const handleLike = async() => {
    console.log(user)
    // debugger
    if(user === null){
      swal("¡Ops algo ocurrió!", "Debes iniciar sesion para poder dar me gusta, si no tienes una cuenta, puedes crear una en registrate en el menu")
    } else {
      const q = query(collection(db, "userName"));
        const querySnapshot = await getDocs(q);
        const queryData = querySnapshot.docs.map((data) => ({...data.data(), id: data.id,}));
        console.log(queryData);
        queryData.map(async () => {
          await setDoc(doc(db, `userName/${user.uid}/favProduct`, prod.id), {
            name: prod.name,
            price: prod.price,
            collection: prod.collection,
            image: prod.image,
            category: prod.category,
            liked: "true"
            // currentLocation: details.currLoc,
            });
        })
        setLikeButton(!likeButton)
    }
  };
  return (
    <li key={prod.id} className="product__container">
        {/* <Link onClick={() => {setIsOpen(true)}} className="product__link" to={"/cojin/" + prod.id} >
            <img className="product__image" src={prod.image} alt={prod.name} />
        </Link> */}
        {/* <Link className="product__link" to={`/cojin/${prod.id}`} >
            <img className="product__image" src={prod.image} alt={prod.name} />
        </Link> */}
        <div onClick={() => setIsOpen(true)} className="product__link">
            <img className="product__image" src={prod.image} alt={prod.name} />
        </div>
            <div className="infoProduct__container"  >
              <div className='infoProduct'>
                <div >
                <span className='price'>S/{prod.price}</span>
                  {/* <span className='fav'>Like</span><br/> */}
                </div>
                <div className="title">{prod.name}</div>
              </div>
              <div className='infoProduct_fav' >
                {/* <img  className="favProductIcon" src={favProductIcon} alt="like" /> */}
                <FontAwesomeIcon 
                onClick={handleLike} 
                className={`favProductIcon-regular ${likeButton && "favProductIcon-regular-desable"}`} 
                icon={faHeartRegular} 
                />
                <FontAwesomeIcon 
                className={`favProductIcon-solid ${likeButton && "favProductIcon-animation"}`}
                icon={faHeartSolid} 
                />
              </div>
            </div>
        {/* <ModalProduct open={isOpen} onClose={() => setIsOpen(false)} > */}
        <ModalProduct open={isOpen} >
          <img className="product__image--modal" src={prod.image} alt={prod.name}/>
          <div className="product__name--modal">
            <h2 className="product__title--modal">{prod.name}</h2>
            <p  onClick={() => setIsOpen(false)}  className="product__close">cerrar</p>
          </div>
        </ModalProduct >
    </li>
  )
}

export default ProductCard;
