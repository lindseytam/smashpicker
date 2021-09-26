import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
require('dotenv').config()

const FirebaseConnector = () => {
  let initiaized = false

  const [charData, setCharData] = useState([])
  const [tagData, setTagData] = useState([])

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

  initiaized = true
  useEffect(() => {
    getCharData()
    getTagData()
  }, [initiaized])

  return (
  <div>
      { JSON.stringify(charData) }
      <br/><br/><br/><br/>
      { JSON.stringify(tagData) }
  </div>
  )
}

export default FirebaseConnector
