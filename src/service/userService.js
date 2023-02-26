

import axios from "axios"


const login= async(user) =>{
    try {
        const response = await axios.post(
          'http://localhost:8080/user/login',
          user
        );
        console.log(response.data);
        return response
      } catch (error) {
        console.log(error);
      }
}

export default login