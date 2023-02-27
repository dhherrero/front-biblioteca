import {obtenerLibros} from "../../service/getBooks";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import "./ListaLibros.css"




export default function ListaLibros(){
    const portadaDefecto="/defecto3.png"
    const [books, setBooks] = useState([])
    const [orderBy, setOrderBy] = useState("") 
    
    useEffect(()=> {
        obtenerLibros(orderBy)
            .then((result) => setBooks(result.data))
        
    },[])

    const handleChange = (event) => {
        const orderBy = event.target.value
        setOrderBy(orderBy)
        obtenerLibros(orderBy).then((result) => setBooks(result.data))
        
      };

    return(
        <>
       <span>Order by </span>
        <select value={orderBy} onChange={handleChange} className="orderBy">
            <option value="defecto">Selecciona una opción</option>
            <option value="titulo">TITULO</option>
            <option value="autor">AUTOR</option>
            <option value="edad">EDAD</option>
        </select>
        <div className="listaLibros">
            {books.map((libro,i)=>{
                return(
                    <div key={libro.id} className="libros">
                        <Link to={`/biblioteca/${libro.id}`}>
                        <img className="portada" src={libro.portada? libro.portada:portadaDefecto}/>
                        <div className="infoBook">
                            <p><b>Titulo: </b> {libro.titulo}</p>
                            <p><b>Páginas: </b> {libro.numeroPaginas}</p>
                            <p><b>Edición: </b> {libro.edicion}</p>
                        </div></Link>
                    </div>
                )
            })}</div>
        </>
    )
}