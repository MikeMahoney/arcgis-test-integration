import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: ''
})

const handleError = (error: AxiosError) => {
  const status = error.response?.status

  if (status && status !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return handleError(error)
})
