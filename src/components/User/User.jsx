import './User.css';
import {useEffect, useState} from "react";

export default function User (persona){
   
   const user= persona.persona;
 
    return(
    <>
        <div className='totalInfoUser'>
            <p><b>Nombre: </b>{user.nombre?user.nombre:"Desconocido"} </p>
            <p><b>NIF: </b> {user.nif?user.nif:"Desconocido"}</p>
            <p><b>Correo electrónico: </b> {user.correoElectronico?user.correoElectronico:"Desconocido"}</p>
            <p><b>Teléfono: </b> {user.telefono?user.telefono:"Desconocido"}</p>
            <p><b>Dirección: </b>{user.direccion?user.direccion:"Desconocido"}</p>
            <p><b>Web personal: </b>{user.webPersonal?user.webPersonal:"Desconocido"}</p>
        </div>
    </>

    )

}