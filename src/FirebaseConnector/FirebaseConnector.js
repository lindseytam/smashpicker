import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
require('dotenv').config()

function FirebaseConnector () {
  let charData

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

  const getData = (path) => {
    const starCountRef = ref(db, path)
    onValue(starCountRef, (snapshot) => {
      charData = snapshot.val()
      // console.log("charData=", charData)
    })
  }

  getData('chars')

  return (
    <div>
        {/* { JSON.stringify(charData) } */}
    </div>
  )
}

export default FirebaseConnector
