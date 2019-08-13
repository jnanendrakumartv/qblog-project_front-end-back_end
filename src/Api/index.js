import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:9000',
})
export const signup = payload => api.post('/signup', payload)

export const signin = payload => api.post('/signin', payload)
export const details1 = payload => api.post('/details1', payload)
export const details =payload => api.post('/details', payload)
export const increment =payload => api.post('/like',payload)
// export const comme =payload => api.post('/comments', payload)



const apis = {
signup,
signin,
details1,
details,
increment
// comme

}

export default apis