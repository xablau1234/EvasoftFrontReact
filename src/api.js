import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://evasoft.netlify.com'
})
export default api;