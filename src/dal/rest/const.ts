export const baseApiUrl = process.env.NODE_ENV === 'development'
    ? '/api'
    : process.env.BACKEND_HOST