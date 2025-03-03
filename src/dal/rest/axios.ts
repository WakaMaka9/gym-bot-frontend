import axiosLib from 'axios'
import { baseApiUrl } from './const'

export const axios = axiosLib.create({
    baseURL: baseApiUrl,
})