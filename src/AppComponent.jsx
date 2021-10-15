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
  const [omitChars, setOmitChars] = useState([])
  const [chosenChars, setChosenChars] = useState([]) // tracks which chars are chosen

  const handleCharChange = (event) => {
    setCharData(event)
  }

  const handleTagChange = (event) => {
    setTagData(event)
  }

  const handleOmittedChars = (event) => {
    setOmitChars(event)
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
          omitChars={omitChars}
          setOmitChars={handleOmittedChars}
          chosenChars={chosenChars}
          setChosenChars={setChosenChars}
        />
    </React.Fragment>)
  } else {
    content = <ResultScreen
                numPlayers={numPlayers}
                theme={theme}
                chosenChars={chosenChars}
                setChosenChars={setChosenChars}
                omitChars={omitChars}
                tagData={tagData}
                unique={unique}
                charData={charData}
              />
  }
  return (
  <Background>
    {content}
  </Background>)
}

export default AppComponent
