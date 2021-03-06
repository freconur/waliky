import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import app from "../firebase/firebase.config";
import { getFirestore, doc, getDoc  } from "firebase/firestore";
import '../styles/MenuUser.css'

const MenuUser = ({user, logout}) => {

	const db = getFirestore(app);
	// const { logout } = useAuth()
	// const [getUserData, setGetUserData] = useState([])
	const [userAdmin, setUserAdmin] = useState(false)

	useEffect(()=> {
		const getAdmin = async () => {
		  const docRef = doc ( db, "userName", user.uid)
		  const dataDoc = await getDoc(docRef)
			if(dataDoc.data().rol === "admin"){
			 return setUserAdmin(!userAdmin);
			}
		}
		getAdmin()
	  },[user.uid]);

	const handleLogout = async() => {
		await logout()
	}

  return (
    // <div >
      <ul className={`MenuUser ${userAdmin ? "menuAdmin" : ""}`} >
		{userAdmin && 
        <li className="MenuUser__li">
          <Link className="MenuUser__li--link" to="/user">Dashboard</Link>
        </li>
		}
        <li className="MenuUser__li">
          <Link className="MenuUser__li--link" to="/favoritos">Favoritos</Link>
        </li>
        <li className="MenuUser__li" onClick={handleLogout}>
			{/* <Link to="/"> */}
				Salir
			{/* </Link> */}
        </li>
      </ul>
    // </div>
  );
};

export default MenuUser;
