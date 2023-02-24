import './Login.css'
import { useLocation } from 'wouter'
import Title from '../../page/title/Title'

export default function Login (){
    const [, setLocation] = useLocation()
    
    function handleLogin(){
        setLocation('/biblioteca')
    }
    
    return (
        <>

        <div class="main">  	
		
        <input type="checkbox" id="chk" aria-hidden="true"/>
			<div class="login">
				<form class="form">
					<label for="chk" aria-hidden="true">Log in</label>
					<input class="inputLogin" type="text" name="email" placeholder="NIF" required=""/>
					<input class="inputLogin" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Log in</button>
				</form>
			</div>

            
      <div class="register">
				<form class="form">
					<label for="chk" aria-hidden="true">Register</label>
					<input class="inputLogin" type="text" name="txt" placeholder="NIF" required=""/>
                    <input class="inputLogin" type="text" name="txt" placeholder="Name" required=""/>
					<input class="inputLogin" type="email" name="email" placeholder="Email" required=""/>
					<input class="inputLogin" type="password" name="pswd" placeholder="Password" required=""/>
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