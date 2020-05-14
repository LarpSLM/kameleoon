import axios from 'axios';


const axiosFetch = axios.create({
    baseURL: 'https://kameleoon-tools.free.beeceptor.com',
    timeout: 5000,
    withCredentials: false
})

export default axiosFetch;