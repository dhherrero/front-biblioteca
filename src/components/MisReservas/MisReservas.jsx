import './MisReservas.css'
import {reservas } from '../../service/reservasService'
import Navbar from "../NavBar/Navbar";
import { useState, useEffect } from 'react';

export default function MisReservas(){
  const nif= sessionStorage.getItem("nif")
  const rol= sessionStorage.getItem("rol")

  const [misReserva, setMisReservas] = useState([])

  useEffect(()=> {
    reservas(nif,rol)
        .then((data) => {setMisReservas(data); console.log(data)})
    },[])

    return(
        <>
            <Navbar />
            <div className='listaReservas'>
                <h2>MIS RESERVAS</h2>
            {misReserva?misReserva.map(({titulo,portada,fechaInicio, fechaFin, idReserva, nifUsuario },i)=>{
                return(
                    <div className='reserva' key={idReserva}>
                        <img src={portada}></img>
                        <div className='reserva-content'>
                            <h3>{titulo}</h3>
                            {sessionStorage.getItem("rol")==="superusuario" &&<p className='infoReserva'><b>NIF:</b> {nifUsuario}</p>}
                            <div className='fechas'>
                                    <p className='infoReserva'><b>FECHA RESERVA:</b> {fechaInicio}</p>
                                    <p className='infoReserva' ><b>FECHA FIN RESERVA:</b> {fechaFin}</p>
                            </div>
                            <div className='botones'>
                                    <button className="botonCancelarReserva"> Cancelar reserva</button> 
                                    <button className="botonAmpliarReserva"> Ampliar reserva</button>      
                            </div>
                        </div>
                    </div>

                )
            }
            
            ): (<h2>No tienes reservas</h2>)}
            </div>
        </>)



}
