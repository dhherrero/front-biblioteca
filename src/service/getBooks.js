import axios from "axios"


const obtenerLibros= async() =>{
    const url = "http://localhost:8080/allBooks"
    const result = await axios.get(url)
    console.log(result.data)
    return result
}

export default obtenerLibros