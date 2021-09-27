import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
require('dotenv').config()

const FirebaseConnector = (props) => {
  const { setTagData, setCharData } = props
  let initialize = false

  const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  }

  initializeApp(config)
  const db = getDatabase()

  const getCharData = () => {
    const data = ref(db, 'chars')
    onValue(data, (snapshot) => {
      setCharData([snapshot.val()])
    })
  }

  const getTagData = () => {
    const data = ref(db, 'tags')
    onValue(data, (snapshot) => {
      setTagData([snapshot.val()])
    })
  }

  initialize = true
  useEffect(() => {
    getCharData()
    getTagData()
  }, [initialize])

  return null
}

export default FirebaseConnector
