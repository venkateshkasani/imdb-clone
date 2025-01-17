import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://imdb-clone-3-n5xj.onrender.com'
})

export default axiosInstance;

