import {Link} from "wouter";
import './home.css'
export default function Home (){
    return (
        <div>
            <section className='App-content'>
                <Link to='/login' className='sign'> Sign in</Link>
                <Link to='/login' className='sign'> Sign up</Link>
            </section>
        </div>
        
    )}