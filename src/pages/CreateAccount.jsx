import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import googleIcon from '../assets/icons/google-icon.png'
import '../styles/1.css'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const db = getFirestore(app)

const CreateAccount = () => {
  const [activeForm, setActiveForm] = useState(false)
  const [error, setError] = useState();
  const [usuario, setUsuario] = useState({
    email: '',
    password:'',
    confirmPassword: ''
  });
  const [datosUsuario, setDatosUsuario] = useState({
    name: '',
    lastName: '',
    rol: 'usuario'
  })
    const navigate = useNavigate()
    const {signin, user, loginWithGoogle} = useAuth();

  //   const handleChange = ({target:{name, value}}) => {
  //   setUsuario({...usuario, [name]:value})
  //   // console.log(e.target.name, e.target.value)
  // }
  const handleChangeData= ({target:{name, value}}) => {
    setDatosUsuario({...datosUsuario, [name]: value})
  }
  const { register, reset, handleSubmit, formState: { errors }} = useForm();
  const onSubmit= async (data ) => {
    console.log("valores de data usuario:",{data})
    // confirmPassword(data)
    debugger

    if(data.password !== data.confirmPassword) {
      swal("Algo paso!","las contraseñas no coinciden")
    }else if (data.password === data.confirmPassword){
      try {
        await signin(data.email, data.password)
        setActiveForm(!activeForm);
      } catch ( error ) {
        setError('server error')
      }
      reset();
    }
  }

  
  const handleSubmitData = async(e) => {
    e.preventDefault()
    if(datosUsuario.name === ""){
      swal("Algo Paso", "porfavor llene sus nombres y apellidos")
    } else if (datosUsuario.lastName === ""){
      swal("Algo Paso", "porfavor llene sus nombres y apellidos")
    } else {
      await setDoc(doc( db, `userName/${user.uid}`), datosUsuario)
      navigate("/")
    }
  }
  const handleGoogleSignin = async() => {
    await loginWithGoogle()
    navigate("/")
  }
  return (
    <div className="auth__signin">
      <div className='auth__signing--container'>
        {error && <p>{error}</p>}
          <h2>Registrate y descubre todos nuestros productos</h2>

        { !activeForm && 
          <form className="form__signin" onSubmit={handleSubmit(onSubmit)}>
            <div  onClick={handleGoogleSignin} className="signin">
            <div className='createAccountGoogle'>
                {/* <FontAwesomeIcon icon={faGoogle} /> */}
                <img className="googleIcon" src={googleIcon} alt="google" />
              </div>
              <div>
                Continuar con Google
              </div>
            </div>
            {/* <div className='signin'>Continuar con facebook</div> */}
            <div>
              <label>Correo electronico</label><br/>
              <input 
              {...register("email", { required: true})}
              className='email input'
              placeholder='Ingresa tu correo' 
              type='email'
              name="email"
              // onChange={handleChange}
              />
            </div>
            {errors.email?.type === "required" && "tu email es requerido"}
            <div>
              <label>Contraseña</label><br/>
              <input 
              {...register("password", { required: true})}
              className='password input__signin'
              placeholder='Ingrasa tu contraseña' 
              type='password'
              name="password"
              // onChange={handleChange}
              />
            </div>
            {/* confirmar contrasenia */}
            <div>
              <label>Confirmar contraseña</label><br/>
              <input 
              {...register("confirmPassword", { required: true})}
              className='password input'
              placeholder='Ingrasa tu contraseña' 
              type='password'
              name="confirmPassword"
              // onChange={handleChange}
              />
            </div>
            {errors.confirmPassword?.type === "required" && "la contrasena es requerido"}
            <button className='button__signin'>Aceptar</button>
          </form>
        } 
        {/* //form para la peticion de datos nombre, email, rol :usuario\ */}
        {activeForm && 
          <form className="form__signin" onSubmit={handleSubmitData}>
            <div>
              <label>Nombre</label>
              <input 
              name="name"
              onChange={handleChangeData}
              type="text" 
              className='email input__signin'
              />
            </div>
            <div>
              <label>Apellidos</label>
              <input 
              name="lastName"
              type="text" 
              className='email input__signin'
              onChange={handleChangeData}
              />
            </div>
           
            <button className='btn btn-primary'>resgitrar</button>
          </form>
        }



          {/* <Link to="/">Olvidaste tu contraseña?</Link> */}
      </div>
    </div>
  )
}

export default CreateAccount
