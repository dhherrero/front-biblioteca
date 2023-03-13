
import axios from "axios"

const handleLocation= (nif,rol,setLocation) =>{
  setLocation("/biblioteca")
  sessionStorage.setItem("nif",nif)
  sessionStorage.setItem("rol",rol)

}
export const login= async(user,setLocation) =>{
    try {
        const {data: {nif,rol,estado }}= await axios.post(
          'http://localhost:8080/user/login',
          user);
      
        console.log(estado)
        estado === "OK" ?  handleLocation(nif,rol,setLocation)  : alert("ERROR")
        
      } catch (error) {
        console.log(error);
      }
}

export const register= async(body,setLocation)=>{
  try {
    const response = await axios.post(
      'http://localhost:8080/user/newUser',
      body
    );
    console.log(response.data);
    response.data=== 'OK' ? handleLocation(body.nif, body.rol, setLocation) : alert("ERROR")
  } catch (error) {
    console.log(error);
  }
}

