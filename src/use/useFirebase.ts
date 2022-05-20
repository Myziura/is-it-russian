import { initializeApp } from 'firebase/app'

import generateApi from '@/api'

const app = initializeApp({})

const api = generateApi(app)

export const useFirebase = () => api
