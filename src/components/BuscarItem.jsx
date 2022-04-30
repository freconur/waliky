import React, { useState } from "react";
import app from "../firebase/firebase.config";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import "../styles/BuscarItem.css";
import SelectCategory from "./SelectCategory";
import SelectCollection from "./SelectCollection";
import { useForm } from "react-hook-form";
const db = getFirestore(app);
const BuscarItem = ({ submitHandlerUpdate, submitHandlerDelete }) => {
  const idValue = {
    id: "",
  };
  const inputInitial = {
    name : "",
    price : "",
    category: "",
    collection: ""
  }
  const collectionItem = {
    cojines: "cojines",
    tazas: "tazas",
    polos: "polos",
    personalizados: "personalizados"
    // cojines: collection(db, "cojines"),
    // tazas: collection(db, "tazas"),
    // polos: collection(db, "polos"),
    // personalizados: collection(db, "personalizados")
  } 
  const [collections, setCollections] = useState(collectionItem)
  const [productValue, setProductValue] = useState(inputInitial);
  const [itemId, setItemId] = useState(idValue);
  const [prueba, setPrueba] = useState([]);

  const getProduct = async (e) => {
    e.preventDefault();
    const itemTazas = doc(db, "tazas", itemId.id);
    const itemsTazas = await getDoc(itemTazas);
    if (itemsTazas.exists()) {
      setPrueba(itemsTazas.data());
    }
    const itemPolos = doc(db, "polos", itemId.id);
    const itemsPolos = await getDoc(itemPolos);
    if (itemsPolos.exists()) {
      setPrueba(itemsPolos.data());
    }
    const itemCojines = doc(db, "cojines", itemId.id);
    const itemsCojines = await getDoc(itemCojines);
    if (itemsCojines.exists()) {
      setPrueba(itemsCojines.data());
    }
    const itemPersonalizados = doc(db, "personalizados", itemId.id);
    const itemsPersonalizados = await getDoc(itemPersonalizados);
    if (itemsPersonalizados.exists()) {
      setPrueba(itemsPersonalizados.data());
    }
  };
  
  const handleChangeCollection = (e) => {
    const name = e.target.value;
    if (name === "cojines") {
      setCollections(collections.cojines);
    } else if (name === "tazas") {
      setCollections(collections.tazas);
    } else if (name === "polos") {
      setCollections(collections.polos);
    } else if (name === "personalizados") {
      setCollections(collections.personalizados);
    } else if (name === "medias") {
      setCollections(collections.medias);
    } else if (name === "padmouse") {
      setCollections(collections.padmouse);
    }
    setProductValue({ ...productValue, collection: name })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemId({ [name]: value });
    // setProductValue({...productValue, [name]:value})
    console.log(itemId);
  };
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setProductValue({...productValue, [name]:value})
  };
  const handleClickDelete = () => {
    submitHandlerDelete(prueba.collection, itemId.id)
  }
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    submitHandlerUpdate(data, collections, itemId.id );
    // debugger
    
    reset();
  };
  return (
    <div>
      <h2>Buscar item</h2>
      <p>aqui mostrara los resultados de la busqueda por id de producto</p>
      <form className="form form__inputedit">
        <input
          type="text"
          name="id"
          className="id"
          placeholder="id de producto"
          onChange={handleInputChange}
        />
        <button onClick={getProduct}>Buscar</button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="form__findedit">
        <div>
          <label>nombre</label>
          <div className="form__inputedit">
            <p>{prueba.name}</p>
            <input 
            {...register("name", { required: true })}
            name="name" 
            type="text" 
            placeholder="edita el nombre" 
            onChange={handleInputChanges}/>
          </div>
          <label>precio</label>
          <div className="form__inputedit">
            <p>{prueba.price}</p>
            <input 
            {...register("price", { required: true })}
            name="price"
            type="text" 
            placeholder="edita el precio" 
            onChange={handleInputChanges}/>
          </div>
          <label>colleccion</label>
          <div className="form__inputedit">
            <p>{prueba.collection}</p>
            <select 
            {...register("collection", { required: true })}
            name="collection"
            onChange={handleChangeCollection}
            >
                <SelectCollection />
            </select>
          </div>

          <label>categoria</label>
          <div className="form__inputedit">
            <p>{prueba.category}</p>
            <select 
            {...register("category", { required: true })}
            name="category"
            onChange={handleInputChanges}
            >
                <SelectCategory/>
            </select>
          </div>

        </div>
        <div>
          {/* <p>imagen</p> */}
          <img src={prueba.image} alt={prueba.name} />
        </div>
        <div>
          <button className="btn btn-primary">editar</button>
          <button onClick={handleClickDelete}>Borrar</button>
        </div>
      </form>
    </div>
  );
};

export default BuscarItem;
