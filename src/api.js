import axios from 'axios'

const api = axios.create({
    baseUrl: 'https://evasoft.herokuapp.com/'
})
export default api;