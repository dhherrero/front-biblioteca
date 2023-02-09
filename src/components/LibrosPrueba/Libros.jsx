import Navbar from "../NavBar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import './Libros.css';

export default function Libros (){

    const [books, setBooks] = useState([])

    useEffect(()=> {
        const obtenerLibros= async() =>{
            const url = "http://localhost:8080/allBooks"
            const result = await axios.get(url)
            console.log(result.data)
            setBooks(result.data)
           
        }
        obtenerLibros()
        
    },[])
    return(
        <>
            <Navbar />
            <h2> LIBROS DE PRUEBA</h2>
            {books.map((libro,i)=>{
                return(
                    <div key={i} className="libros">
                        <img className="portada" src={libro.imagen}/>
                        <div className="infoBook">
                            <p><b>Titulo: </b> {libro.titulo}</p>
                            <p><b>Páginas: </b> {libro.paginas}</p>
                            <p><b>Edición: </b> {libro.edicion}</p>
                        </div>
                    </div>
                )
            })}
           
        </>
    )

}
