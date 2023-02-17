import obtenerLibros from "../../service/getBooks";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import "./ListaLibros.css"

export default function ListaLibros(){
    const [books, setBooks] = useState([])
    useEffect(()=> {
        obtenerLibros()
            .then((result) => setBooks(result.data))
        
    },[])

    return(
        <>
        <div className="listaLibros">
            {books.map((libro,i)=>{
                return(
                    <div key={libro.numero} className="libros">
                        <Link to={`/biblioteca/${libro.numero}`}>
                        <img className="portada" src={libro.imagen}/>
                        <div className="infoBook">
                            <p><b>Titulo: </b> {libro.numero}</p>
                            <p><b>Páginas: </b> {libro.paginas}</p>
                            <p><b>Edición: </b> {libro.edicion}</p>
                        </div></Link>
                    </div>
                )
            })}</div>
        </>
    )
}