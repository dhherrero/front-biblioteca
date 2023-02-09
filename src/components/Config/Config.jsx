import axios from "axios";

const URL= "http://localhost:8080/";

const API = axios.create({
    baseURL: URL,
});

export default API;