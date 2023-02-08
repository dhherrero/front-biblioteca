import {Link} from "wouter";
import Title from "../title/Title";
import './Home.css'
export default function Home (){
    return (
        <div>
            <Title />
            <section className='App-content'>
                <Link to='/login' className='sign'> Sign in</Link>
                <Link to='/login' className='sign'> Sign up</Link>
            </section>
        </div>
        
    )}