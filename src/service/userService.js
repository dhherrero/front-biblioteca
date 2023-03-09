

import axios from "axios"



const handleLogin= (nif,rol,setLocation) =>{
  setLocation("/biblioteca")
  sessionStorage.setItem("nif",nif)
  sessionStorage.setItem("rol",rol)
}
export const login= async(user,setLocation) =>{
    try {
        const {data: { nif,rol,estado }}= await axios.post(
          'http://localhost:8080/user/login',
          user
        );
        
        console.log(estado)
        estado === "OK" ?  handleLogin(nif,rol,setLocation)  : alert("ERROR")
        
      } catch (error) {
        console.log(error);
      }
}

export const register= async(body)=>{
  try {
    const response = await axios.post(
      'http://localhost:8080/user/newUser',
      body
    );
    console.log(response.data);
    return response
  } catch (error) {
    console.log(error);
  }
}

