import Navbar from "../NavBar/Navbar";
import ListaLibros from "../ListaLibros/ListaLibros";
import './Libros.css';



export default function Libros (){
    return(
        <>
            <Navbar />
            <h2> LIBROS</h2>
            <ListaLibros />  
            
        </>
    )

}
