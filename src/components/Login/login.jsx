import './login.css'
import { useLocation } from 'wouter'
import Title from '../../page/title/title'

export default function Login (){
    const [, setLocation] = useLocation()
    
    function handleLogin(){
        setLocation('/biblioteca')
    }
    
    return (
        <section className="App-content">
           <Title />
            <form>
                <input type="text" id="user" className="input" placeholder="Nombre de usuario"  ></input>
                <input type="password" id="pass" className="input" placeholder="Password" ></input>
            </form>
            <button onClick={handleLogin}>
                Login
            </button>
        </section>
    )
    }