import axios from "axios"

export const axiosPonturi = axios.create({
  baseURL: 'http://localhost:3005/api'
})

export const getPonturiPage = async (pageParam = 1) => {
  const response = await axiosPonturi.get(`/ponturi?page=${pageParam}`)
  return response.data
}