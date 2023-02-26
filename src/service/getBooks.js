import axios from "axios"


export const obtenerLibros= async(orderBy) =>{
    const url = "http://localhost:8080/allBooks"
    const result = await axios.get(url, {params: {orderBy}})
    return result
}

export const obtenerUnLibro= async(requestNumero) =>{
    try{
        const body= {
            numero:requestNumero
        }
        const response = await axios.post(
            'http://localhost:8080/book/getBook',
            body
          );
          console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error);
      }  
}






