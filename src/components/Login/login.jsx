import './Login.css'
import login from '../../service/userService'
import { useLocation } from 'wouter'
import { useState } from 'react'


export default function Login (){
    const [, setLocation] = useLocation()
    
    const [formData, setFormData] = useState({
        nif: '',
        password: ''
      });
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleLocation=(result) =>{
        (result==="OK")? setLocation('/biblioteca'): ""
    }
    
    function handleLogin(event){
        event.preventDefault()
        console.log(formData)
        login(formData).then((result)=> {console.log("LOGIN: "+ result); handleLocation(result)})
    }
    
    return (
        <>

        <div className="main">  	
		
        <input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="login">
				<form className="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input className="inputLogin" onChange={handleInputChange} value={formData.nif} type="text" name="nif" placeholder="NIF" required=""/>
					<input className="inputLogin" onChange={handleInputChange}  value={formData.password} type="password" name="password" placeholder="Password" required=""/>
					<button onClick={handleLogin}>Log in</button>
				</form>
			</div>

            
      <div className="register">
				<form className="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input className="inputLogin" type="text" name="txt" placeholder="NIF" required=""/>
					<input className="inputLogin" type="email" name="email" placeholder="Email" required=""/>
					<input className="inputLogin" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Register</button>
				</form>
			</div>
        
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