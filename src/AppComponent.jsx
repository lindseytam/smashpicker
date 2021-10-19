import React, { useState, useEffect } from 'react'
import Background from './components/Background'
import SelectionScreen from './pages/SelectionScreen'
import ResultScreen from './pages/ResultScreen'
import FirebaseConnector from './FirebaseConnector/FirebaseConnector'

function AppComponent () {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')
  const [charData, setCharData] = useState([]) // data on all chars
  const [tagData, setTagData] = useState([]) // data on all chars in a theme
  const [omitChars, setOmitChars] = useState([]) // tracks which chars to omit
  const [chosenChars, setChosenChars] = useState([]) // tracks which chars are chosen
  const [unique, setUnique] = useState(true)

  const checkUnique = () => {
    const numChosen = chosenChars.length
    if (tagData.length === 1) {
      return numChosen !== 0 && numChosen <= tagData[0][theme].length
    }
  }

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

  useEffect(() => {
    const isUnique = checkUnique()
    setUnique((isUnique === undefined) ? true : isUnique)
  }, [theme])

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
    content = (
      <ResultScreen
        numPlayers={numPlayers}
        theme={theme}
        chosenChars={chosenChars}
        setChosenChars={setChosenChars}
        omitChars={omitChars}
        tagData={tagData}
        unique={unique}
        charData={charData}
        setOnSelectionScreen={setOnSelectionScreen}
      />
    )
  }
  return (
  <Background>
    {content}
  </Background>)
}

export default AppComponent
