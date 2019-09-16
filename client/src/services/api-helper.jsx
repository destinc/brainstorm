import axios from 'axios'

const api = axios.create({
badseUrl = 'http://localhost:3000'
})

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData)
    console.log(resp)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  
  export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', { user: registerData })
    return resp.data
  }
  
  export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const resp = await api.get('/users/verify');
      return resp.data
    }
    return false;
  }