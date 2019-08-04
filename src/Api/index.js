import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:9000',
})
export const signup = payload => api.post('/signup', payload)

export const signin = payload => api.post('/signin',payload)

const apis = {
signup,
signin

}

export default apis