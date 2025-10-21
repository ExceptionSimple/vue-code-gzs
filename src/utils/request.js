import axios from 'axios'

const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  timeout: 1000 * 10,
})

// axios 请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios 响应拦截器
httpInstance.interceptors.response.use((resp) => {
  return resp.data
}, (error) => {
  return Promise.reject(error)
})

export default httpInstance

