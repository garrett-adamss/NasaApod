import Axios from 'axios'
import { baseURL } from '../env'


export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 4000,
  params: {
    api_key: 'zItDFXf2c6QfbEkZRMOeA64mTeURRGteWp0a4YlP',
  }
})