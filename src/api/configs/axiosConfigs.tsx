import axios, { AxiosError } from 'axios'

export const API_KEY =
  'AAPK00ac37c377dc480682b13ca2495186b8-Q1WLNa0SBac6uCqWtA6YXNJDlH6HmE_ptbUqJxao1QsJK7nnYV3S_Tt276B5GHe'

console.log(API_KEY)

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
