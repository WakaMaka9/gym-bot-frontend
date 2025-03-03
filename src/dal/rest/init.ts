import { axios } from './axios'
import { requestFx } from './public'
import { baseApiUrl } from './const'

requestFx.use(params => {
    const defaultHeaders = params.headers || {}
    const headers = {
        ...defaultHeaders,
    }

    if (params.accessToken) {
        headers.Authorization = params.accessToken
    }

    return axios.request({
        headers,
        method: params.method,
        url: params.url,
        params: params.query,
        data: params.body,
    })
})