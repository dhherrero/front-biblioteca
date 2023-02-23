import Navbar from "../NavBar/Navbar";
import ListaLibros from "../ListaLibros/ListaLibros";
import './Libros.css';
import UploadForm from "../Upload/Upload";


export default function Libros (){
    return(
        <>
            <Navbar />
            <h2> LIBROS DE PRUEBA</h2>
            <ListaLibros />  
            <UploadForm></UploadForm>  
        </>
    )

}
