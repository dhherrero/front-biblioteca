
import {obtenerUnLibro} from "../../service/getBooks";
import {useEffect, useState} from "react";
import Navbar from "../NavBar/Navbar";
import "./InfoLibro.css"

export default function InfoLibro({params}){
    
    const {numero} = params
    const descripcion = '"Cien años de soledad" es una novela icónica escrita por el reconocido autor colombiano, Gabriel García Márquez. Publicada por primera vez en 1967, esta obra ha cautivado a millones de lectores en todo el mundo con su poderosa narrativa, su prosa lírica y su rica exploración de temas universales. La historia se desarrolla en un pueblo ficticio llamado Macondo, y sigue la vida de la familia Buendía a lo largo de varias generaciones. A través de los ojos de los Buendía, el lector es transportado a un mundo mágico y realista al mismo tiempo, lleno de personajes complejos, tramas entrelazadas y detalles vívidos "Cien años de soledad" explora temas como la soledad, la identidad, la familia, el amor y la muerte. También es conocida por su estilo narrativo único, con el uso de técnicas literarias como el realismo mágico y el tiempo circular.'
    const [book, setBook] = useState()
    
    useEffect(()=> {
        obtenerUnLibro(numero)
            .then((result) =>{ setBook(result); console.log(book)})
        
    },[])

    return(
        <>
            <Navbar />
            {book? (
            <div>
                <h2>{book.titulo}</h2>
                <div key={book.numero} className="libro-content">
                    <img className="foto" src={book.imagen}/>
                    <div className="info">
                        <h4 className="name">Descripción</h4>
                        <p> {descripcion}</p>
                        <p><b className="name">Páginas: </b> {book.paginas}</p>
                        <p><b className="name">Edición: </b> {book.edicion}</p>
                        <p><b className="name">Editorial: </b> {book.editorial}</p>
                        <p><b className="name">Formato: </b> {book.formato}</p>
                    </div>
                </div>
            </div>):<h2>Libro no encontrado</h2>}  
        </>
    )

}