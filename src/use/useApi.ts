// import { initializeApp } from 'firebase/app'

import generateApi from '@/api'

// const app = initializeApp({})

// const api = generateApi(app)

// export const useApi = () => api

const api = generateApi()

export const useApi = () => api
