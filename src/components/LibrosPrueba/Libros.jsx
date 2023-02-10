import Navbar from "../NavBar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import './Libros.css';

const obtenerLibros= async() =>{
    const url = "http://localhost:8080/allBooks"
    const result = await axios.get(url)
    console.log(result.data)
    return result
}

export default function Libros (){

    const [books, setBooks] = useState([])

    useEffect(()=> {
        
        obtenerLibros()
            .then((result) => setBooks(result.data))
        
    },[])
    return(
        <>
            <Navbar />
            <h2> LIBROS DE PRUEBA</h2>
            <div className="listaLibros">
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
            })}</div>
           
        </>
    )

}
