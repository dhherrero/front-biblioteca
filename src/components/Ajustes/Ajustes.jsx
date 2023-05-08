import Navbar from "../NavBar/Navbar";
import './Ajustes.css';
import { infoUser } from "../../service/userService";
import {useEffect, useState} from "react";

export default function Ajustes (){
    const noContent ="undefined"
    
    const [user, setUser] = useState({nombre:'',nif:'',correoElectronico:'',telefono:'',direccion:''})

    useEffect(()=> {
        infoUser(sessionStorage.getItem("nif"))
            .then((result) =>{ setUser(result); console.log(user)})
        
    },[])
    
    return(
        <>
            <Navbar />
            <h2 className="tt2"> AJUSTES</h2>
            
            <div className="ajustesContent">
                <div className="infoUser">
                <h3 className="changePP">Información usuario</h3>
                    <p><b>Nombre:</b> {user.nombre?user.nombre:noContent}</p>
                    <p><b>NIF:</b> {user.nif?user.nif:noContent}</p>
                    <p><b>Correo electrónico: </b>  {user.correoElectronico?user.nombre:noContent}</p>
                    <p><b>Teléfono:</b> {user.telefono?user.telefono:noContent}</p>
                    <p><b>Dirección:</b> {user.direccion?user.direccion:noContent}</p>
                </div>
                <div className="cambiarP">
                    <form>
                        <div className="formularioCambio">
                            <h3 className="changePP">Cambio de contraseña</h3>
                            <label  className="labelPassword" >Contraseña actual</label>
                            <input className="inputAjustes" type="password" name="oldPassword"/>
                            <label className="labelPassword" >Contraseña nueva</label>
                            <input className="inputAjustes" type="password" name="newPassword"/>
                            <label className="labelPassword" >Repite la contraseña nueva</label>
                            <input className="inputAjustes" type="password" name="repNewPassword"/>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )

}