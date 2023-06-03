
import {obtenerUnLibro} from "../../service/bookService";
import {useEffect, useState} from "react";
import Navbar from "../NavBar/Navbar";
import "./InfoLibro.css"
import { newReserva } from "../../service/reservasService";
import { deleteBook } from "../../service/bookService";
import {useLocation } from "wouter";
export default function InfoLibro({params}){
    const portadaDefecto="/noAvaiable.png"
    const {id} = params
    const [book, setBook] = useState()
    const desconocido= "por definir"
    const [, setLocation] = useLocation()
    
    
    useEffect(()=> {
        obtenerUnLibro(id)
            .then((result) =>{ setBook(result); console.log(book)})
        
    },[])

    const handleRerserva= async()=>{
        const body = {
            nifUsuario: sessionStorage.getItem("nif"),
            idLibro: id
        }
        await newReserva(body).then(setLocation("/misreservas"))
    }

    const handleEliminar= async()=>{
        const body = {
            id: parseInt(id)
        }
        await deleteBook(body).then(window.location.href="/biblioteca")
    }

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
                            <p><b className="name">Páginas: </b> {book.numeroPaginas?book.numeroPaginas:desconocido}</p>
                            <p><b className="name">Autor/es: </b> {book.autores?book.autores:desconocido}</p>
                            <p><b className="name">Edición: </b> {book.edicion?book.edicion:desconocido}</p>
                            <p><b className="name">Editorial: </b> {book.editorial?book.editorial:desconocido}</p>
                            <p><b className="name">Edad recomendada: </b> {book.edad?book.edad:desconocido}</p>
                            <p><b className="name">Fecha edición: </b> {book.fechaEdicion?book.fechaEdicion:desconocido}</p>
                            <p><b className="name">Género: </b> {book.genero?book.genero:desconocido}</p>  
                        </div>
                    {book.disponible===true && <button className="botonReserva"> Reservar</button> }
                    {sessionStorage.getItem("rol")==="superusuario" && <button className="botonReserva" style={{marginRight:"5px", backgroundColor:"#F85C5C"}} onClick={handleEliminar}> Eliminar</button> }
                    </div>
                      
                </div>
            </div>):<h2>Libro no encontrado</h2>}  
        </>
    )

}