import './Login.css'
import login from '../../service/userService'
import { useLocation } from 'wouter'
import { useState } from 'react'
import Error from '../Error/Error'


export default function Login (){
    const [, setLocation] = useLocation()
    const [error, setError]= useState(false)
    
    const [formData, setFormData] = useState({
        nif: '',
        password: ''
      });

    const [fecha, setFecha] = useState('');

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
      };
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleLocation=(result) =>{
        (result.data==="OK")? setLocation('/biblioteca'): alert("usuario/contraseña incorrecta")
    }
    
    function handleLogin(event){
        event.preventDefault()
        console.log(formData)
        if(!formData.nif || !formData.password){
            console.log("vacio")
            alert("Rellena todos los campos")
            
        }
        else{
            login(formData).then((result)=> {console.log("LOGIN: "+ result.data); handleLocation(result)})
        }
    }
    
    return (
        <>

        <div className="main">  	
		
        <input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="login">
				<form className="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input className="inputLogin" onChange={handleInputChange} value={formData.nif} type="text" name="nif" placeholder="NIF" required/>
					<input className="inputLogin" onChange={handleInputChange}  value={formData.password} type="password" name="password" placeholder="Password" required=""/>
					<button onClick={handleLogin}>Log in</button>
				</form>
			</div>

            
            <div className="register">
				<form className="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input className="inputRegister" type="text" name="txt" placeholder="NIF" required=""/>
					<input className="inputRegister" type="email" name="email" placeholder="Email" required=""/>
					<input className="inputRegister" type="password" name="pswd" placeholder="Password" required=""/>
                    <input className="inputRegister" type="text" name="txt" placeholder="Name" required=""/>
                    <input className="inputRegister" type="text" name="txt" placeholder="Teléfono" required=""/>
                    <input className="inputRegister" type="text" name="txt" placeholder="Web personal" required=""/>
                    <span className='fecha' htmlFor="fecha">Fecha de nacimiento:</span>
                    <input type="date" id="fecha" name="fecha" value={fecha} onChange={handleFechaChange} />
					<button>Register</button>
				</form>
			</div>
            {/*<span className='mensaje'>{error?(<Error content="Usuario o contraseña incorrecta"/>):"ola"}</span>*/}
        
	</div>
    
   {/* <section className="App-content">
           <Title />
            <form>
                <input type="text" id="user" className="input" placeholder="Nombre de usuario"  ></input>
                <input type="password" id="pass" className="input" placeholder="Password" ></input>
            </form>
            <button onClick={handleLogin}>
                Login
            </button>
        </section>  */}
    </>
    )
    }