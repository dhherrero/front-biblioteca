import obtenerLibros from "../../service/getBooks";
import { useEffect, useState } from "react";
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