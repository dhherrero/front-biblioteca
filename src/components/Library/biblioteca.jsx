import Navbar from "../NavBar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Library (){

    const [libros, setLibros] = useState([])

    useEffect(()=> {
        const obtenerLibros= async() =>{
            const url = "http://localhost:8080/hello"
            const result = await axios.get(url)
            console.log(result.data)
            setLibros(result.data)
           
        }
        obtenerLibros()
        
    },[])

    console.log(libros)
    return(
        <div className="App-content">
            <Navbar />
            <h1> BIBLIO</h1>
            <ul>
            {libros.map((libro,i)=>{
                return(
                    <li key={i}>
                    <p>{libro.name}</p>
                    <p> {libro.apellido}</p>
                    </li>
                )
            })}</ul>
        </div>
    )
}
