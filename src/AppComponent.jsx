import React, { useState } from 'react'
import SelectionScreen from './pages/SelectionScreen'
import ResultScreen from './pages/ResultScreen'
import FirebaseConnector from './FirebaseConnector/FirebaseConnector'

function AppComponent (props) {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')
  const [unique, setUnique] = useState(true)
  const [charData, setcharData] = useState([])
  const [tagData, setTagData] = useState([])

  const handleCharChange = (event) => {
    setcharData(event)
  }
  const handleTagChange = (event) => {
    setTagData(event)
  }

  if (onSelectionScreen) {
    return (
      <>
      <FirebaseConnector
        setCharData={handleCharChange}
        setTagData={handleTagChange}
      />
      <SelectionScreen
        numPlayers={numPlayers}
        theme={theme}
        unique={unique}
        setOnSelectionScreen={setOnSelectionScreen}
        setNumPlayers={setNumPlayers}
        setTheme={setTheme}
        setUnique={setUnique}
        charData={charData}
        tagData={tagData}
      />
    </>)
  } else {
    return <ResultScreen numPlayers={numPlayers} theme={theme} unique={unique}/>
  }
}

export default AppComponent
