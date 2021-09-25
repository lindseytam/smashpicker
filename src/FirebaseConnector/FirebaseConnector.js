import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
require('dotenv').config()

const FirebaseConnector = () => {
  
  let charData
  let categoryData

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

  const app = initializeApp(config)
  const db = getDatabase()

  const getCharData = () => {
    const data = ref(db, 'chars')
    onValue(data, (snapshot) => {  charData = snapshot.val() })
  }

  const getTagData = () => {
    const data = ref(db, 'tags')
    onValue(data, (snapshot) => { categoryData = snapshot.val() })
  }

  getCharData()
  getTagData()

  return (
    <div>
        { JSON.stringify(charData) }
        <br/>   <br/>   <br/>
        { JSON.stringify(categoryData) }
    </div>
  )
}

export default FirebaseConnector
