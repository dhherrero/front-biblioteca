import Navbar from "../NavBar/Navbar";
import ListaLibros from "../ListaLibros/ListaLibros";
import { useEffect, useState } from "react";
import './Libros.css';
import obtenerLibros from "../../service/getBooks";




export default function Libros (){
    
    return(
        <>
            <Navbar />
            <h2> LIBROS DE PRUEBA</h2>
            <ListaLibros />
           
        </>
    )

}
