import './User.css';
import {useEffect, useState} from "react";


export default function User (persona){
   
   const user= persona.persona;

   const [isEditable, setIsEditable] = useState(false);

   const [nombre, setNombre] = useState(user.nombre?user.nombre:"Desconocido");
   const [nif, setNif] = useState(user.nif?user.nif:"Desconocido");
   const [password, setPassword] = useState(user.password?user.password:"Desconocido");
   const [correo, setCorreo] = useState(user.correoElectronico?user.correoElectronico:"Desconocido");
   const [telefono, setTelefono] = useState(user.telefono?user.telefono:"Desconocido");
   const [direccion, setDireccion] = useState(user.direccion?user.direccion:"Desconocido");
   const [web, setWeb] = useState(user.webPersonal?user.webPersonal:"Desconocido");

   const [backgroundColor, setBackgroundColor] = useState('white');
   const [border, setBorder] = useState('0px');

   const [borderEdit, setBorderEdit] = useState('2px solid #8DB6F5');

   const [color, setBackgroundEliminarColor] = useState('red');
   const [borderEliminar, setEliminarBorder] = useState('1px solid red');
 
   const handleEditButtonClick = () => {
     setIsEditable(true);
     setBackgroundColor('#F9F2D7');
    setBorder('2px dashed #E1D8B1');
    setBackgroundEliminarColor();
    setEliminarBorder();
    setBorderEdit();
   };

   const handleSaveButtonClick = () => {
    setIsEditable(false);
    setBackgroundColor('white');
   setBorder('0px');
   setBackgroundEliminarColor('red');
    setEliminarBorder('1px solid red');
    setBorderEdit('2px solid #8DB6F5');
  };


 
   
 
    return(
    <>
        <div className='totalInfoUser'>
            <div className='textoUser'>
                <p><b>Nombre: </b> <input className='datosUser' style={{ backgroundColor, border }} type="text" value={nombre} onChange={(name) => setNombre(name.target.value)} disabled={!isEditable} /></p>
                {/*<p><b>NIF: </b> <input className='datosUser' style={{ backgroundColor, border }} type="text" value={nif} onChange={(n) => setNif(n.target.value)} disabled={!isEditable} /></p>*/}
                <p><b>Password: </b><input className='datosUser' style={{ backgroundColor, border }} type="text" value={password} onChange={(t) => setPassword(t.target.value)} disabled={!isEditable} /></p>
                <p><b>Correo electrónico: </b> <input className='datosUser' style={{ backgroundColor, border }} type="text" value={correo} onChange={(email) => setCorreo(email.target.value)} disabled={!isEditable} /></p>
                <p><b>Teléfono: </b> <input className='datosUser' style={{ backgroundColor, border }} type="text" value={telefono} onChange={(telephone) => setTelefono(telephone.target.value)} disabled={!isEditable} /></p>
                <p><b>Dirección: </b><input className='datosUser' style={{ backgroundColor, border }} type="text" value={direccion} onChange={(adress) => setDireccion(adress.target.value)} disabled={!isEditable} /></p>
                <p><b>Web personal: </b><input className='datosUser' style={{ backgroundColor, border }} type="text" value={web} onChange={(www) => setWeb(www.target.value)} disabled={!isEditable} /></p>
            </div>
            <div className='botonesUser'>
                <div className="alienacion">
                    <button className="accionUser" onClick={handleEditButtonClick}  style={{border: borderEdit}} disabled={isEditable}>Editar</button> <br/> 
                    <button className="accionUser"  onClick={handleSaveButtonClick}  disabled={!isEditable}>Guardar</button><br/>
                    <button className="accionUser"  onClick={handleSaveButtonClick} style={{color: color,border: borderEliminar}} disabled={isEditable}>Eliminar</button>
                </div> 
            </div>
        </div>
    </>

    )

}