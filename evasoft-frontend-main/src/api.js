import axios from 'axios'

const api = axios.create({
    baseUrl: Process.env.REACT_APP_API_URL

export default api;