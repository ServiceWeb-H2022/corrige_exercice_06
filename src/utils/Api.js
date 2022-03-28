import axios from "axios";

export default axios.create({
    baseURL: "https://swh2022-libapi.herokuapp.com",
    responseType: "json",
})