import {Link} from "wouter";
import Title from "../title/title";
import './home.css'
export default function Home (){
    return (
        <div>
            <Title></Title>
            <section className='App-content'>
                <Link to='/login' className='sign'> Sign in</Link>
                <Link to='/login' className='sign'> Sign up</Link>
            </section>
        </div>
        
    )}