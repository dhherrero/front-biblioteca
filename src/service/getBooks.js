import axios from "axios"


const obtenerLibros= async(orderBy) =>{
    const url = "http://localhost:8080/allBooks"
    const result = await axios.get(url, {params: {orderBy}})
    return result
}

export default obtenerLibros