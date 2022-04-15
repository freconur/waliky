import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import googleIcon from '../assets/icons/google-icon.png'
import '../styles/2.css'
import swal from 'sweetalert'
import { useForm } from 'react-hook-form'
const LoginAccount = () => {
    const [user, setUser] = useState({
        email: '',
        password:''
    });
    const navigate = useNavigate()
    const {login, loginWithGoogle} = useAuth();
    const [error, setError] = useState();  
  
      const handleChange = ({target:{name, value}}) => {
      setUser({...user, [name]:value})
      // console.log(e.target.name, e.target.value)
    }
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //   // setError('')
    //   try {
    //     await login(user.email, user.password)
    //     navigate("/");
    //   } catch (error) {
    //     // if (error.code ===)
    //     swal("Contraseña o usuario incorrecto", "")
    //   }
    // }

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit =  async(data) => {
      try {
            await login(data.email, data.password)
            navigate("/");
          } catch(error){
            // if (error.code ===)
            swal("Contraseña o usuario incorrecto", "")
          }
    }
const handleGoogleSignin = async() => {
  await loginWithGoogle()
  navigate("/");
}

    return (
      <div className='auth'>
        <div className='auth__container'>
          {error && <p>{error}</p> }
          <h2>Inicia sesion y descubre todos nuestros productos</h2>
    
          <form className="LoginAccount__form" onSubmit={handleSubmit(onSubmit)}>
          <div onClick={handleGoogleSignin} className='LoginAccount__signin'>
              <div className='loginAccountGoogle'>
                {/* <FontAwesomeIcon icon={faGoogle} /> */}
                <img className="googleIcon" src={googleIcon} alt="google" />
              </div>
              <div>
                Continuar con Google
              </div>
          </div>
            {/* <div className='signin'>Continuar con facebook</div> */}
            <div className="input__container">
              <label>Correo electronico</label>
              <input 
              {...register("email", { required: true})}
              className='email input'
              placeholder='Ingresa tu correo' 
              type='email'
              name="email"
              // onChange={handleChange}
              />
            <span className="error-message">{errors.email?.type === "required" && "*tu email es requerido"}</span>
            </div>
            <div className="input__container">
              <label>Contraseña</label>
              <input 
              {...register("password", { required: true})}
              className='password input'
              placeholder='Ingresa tu contraseña' 
              type='password'
              name="password"
              // onChange={handleChange}
              />
            <span className="error-message">{errors.password?.type === "required" && "*tu contraseña es requerido"}</span>
            </div>
            <button className='button'>Login</button>
          </form>
        <Link to="/signin">No tienes cuenta, Registrate!</Link>
        </div>
      </div>
    )  
}

export default LoginAccount
