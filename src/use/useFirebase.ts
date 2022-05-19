import { initializeApp } from 'firebase/app'

import generateApi from '@/api'

const app = initializeApp({
  apiKey: 'AIzaSyAhGhkLSOcNf9YrysHVgV7oDnhbhmmP1sk',
  authDomain: 'is-it-russian.firebaseapp.com',
  databaseURL:
    'https://is-it-russian-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'is-it-russian',
  storageBucket: 'is-it-russian.appspot.com',
  messagingSenderId: '704575387505',
  appId: '1:704575387505:web:062cf53583cebebcfce8d0',
  measurementId: 'G-EYTBX786DV'
})

const api = generateApi(app)

export const useFirebase = () => api
