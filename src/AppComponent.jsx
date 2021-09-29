import React, { useState } from 'react'
import Background from './components/Background'
import SelectionScreen from './pages/SelectionScreen'
import ResultScreen from './pages/ResultScreen'
import FirebaseConnector from './FirebaseConnector/FirebaseConnector'

function AppComponent (props) {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')
  const [unique, setUnique] = useState(true)
  const [charData, setCharData] = useState([])
  const [tagData, setTagData] = useState([])

  const handleCharChange = (event) => {
    setCharData(event)
  }
  const handleTagChange = (event) => {
    setTagData(event)
  }

  let content = null

  if (onSelectionScreen) {
    content = (
    <React.Fragment>
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
    </React.Fragment>)
  } else {
    content = <ResultScreen numPlayers={numPlayers} theme={theme} unique={unique}/>
  }
  return (
  <Background>
    {content}
  </Background>)
}

export default AppComponent
