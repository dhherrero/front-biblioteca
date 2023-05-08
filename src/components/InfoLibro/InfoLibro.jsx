
import {obtenerUnLibro} from "../../service/bookService";
import {useEffect, useState} from "react";
import Navbar from "../NavBar/Navbar";
import "./InfoLibro.css"

export default function InfoLibro({params}){
    const portadaDefecto="/noAvaiable.png"
    const {id} = params
    const [book, setBook] = useState()
    
    useEffect(()=> {
        obtenerUnLibro(id)
            .then((result) =>{ setBook(result); console.log(book)})
        
    },[])

    return(
        <>
            <Navbar />
            {book? (
            <div>
                <h2>{book.titulo}</h2>
                <div key={book.id} className="libro-content">
                    <img className="foto" src={book.portada?book.portada:portadaDefecto}/>
                    <div className="infoYboton">
                        <div className="info">
                            <h4 className="name">Descripción</h4>
                            <p> {book.descripcion}</p>
                            <p><b className="name">Páginas: </b> {book.numeroPaginas}</p>
                            <p><b className="name">Edición: </b> {book.edicion}</p>
                            <p><b className="name">Editorial: </b> {book.editorial}</p>
                            <p><b className="name">Formato: </b> {book.formato}</p>  
                        </div>
                    <button className="botonReserva"> Reservar</button> 
                    </div>
                      
                </div>
            </div>):<h2>Libro no encontrado</h2>}  
        </>
    )

}