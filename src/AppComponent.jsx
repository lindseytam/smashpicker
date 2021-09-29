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
  const [charData, setcharData] = useState([])
  const [tagData, setTagData] = useState([])
  const [omitChars, setOmitChars] = useState([])

  const handleCharChange = (event) => {
    setcharData(event)
  }

  const handleTagChange = (event) => {
    setTagData(event)
  }

  const handleOmittedChars = (event) => {
    setOmitChars(event)
  }

  if (onSelectionScreen) {
    return (
      <Background>
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
          omitChars={omitChars}
          setOmitChars={handleOmittedChars}
        />
      </Background>)
  } else {
    return (
    <Background>
      <ResultScreen numPlayers={numPlayers} theme={theme} unique={unique}/>
    </Background>)
  }
}

export default AppComponent
