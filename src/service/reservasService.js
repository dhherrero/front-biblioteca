import axios from "axios"

export const reservas= async(nif,rol) =>{  
    try {
        if(rol==="superusuario"){
            const {data}= await axios.post(
                "http://localhost:8080/reserva/all");
            return data
        }
        else{
            const {data}= await axios.post(
                "http://localhost:8080/reserva/reservasDe",
                {nifUsuario:nif});
            return data
        }     
      } catch (error) {
        console.log(error);
      }
}