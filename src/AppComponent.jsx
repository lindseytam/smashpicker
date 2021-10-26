import React, { useState, useEffect } from 'react'
import Background from './components/Background'
import SelectionScreen from './pages/SelectionScreen'
import ResultScreen from './pages/ResultScreen'
import FirebaseConnector from './FirebaseConnector/FirebaseConnector'
import './styles/Devices/Mobile.css'
import './styles/SelectionScreen.css'

function AppComponent () {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')
  const [charData, setCharData] = useState([]) // data on all chars
  const [tagData, setTagData] = useState([]) // data on all chars in a theme
  const [omitChars, setOmitChars] = useState([]) // tracks which chars to omit
  const [chosenChars, setChosenChars] = useState([]) // tracks which chars are chosen
  const [unique, setUnique] = useState(true)

  const getScreenSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    if (width < 768 || height < 450) return 'mobile'
    else if (width < 1367) return 'tablet'
    else return 'desktop'
  }

  const [screenSize, setScreenSize] = useState(getScreenSize)

  window.addEventListener(
    'resize', function () { setScreenSize(getScreenSize) }, true)

  // check if there is enough options for all unique chars
  const checkUnique = () => {
    const numChosen = chosenChars.length
    if (tagData.length === 1) {
      const numAvailable = (theme === 'Random Theme' || theme === 'All Characters')
        ? Object.keys(charData[0]).length
        : tagData[0][theme].length
      return numChosen !== 0 && numChosen <= numAvailable
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

  useEffect(() => {
    if (theme === 'Random Theme') {
      setUnique(false)
    } else {
      const isUnique = checkUnique()
      setUnique((isUnique === undefined) ? true : isUnique)
    }
  }, [theme])

  return (
  <Background>
    {/* {content} */}
    <FirebaseConnector
      setCharData={handleCharChange}
      setTagData={handleTagChange}
    />
    <SelectionScreen
      numPlayers={numPlayers}
      theme={theme}
      unique={unique}
      onSelectionScreen={onSelectionScreen}
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
      screenSize={screenSize}
    />
    <ResultScreen
      numPlayers={numPlayers}
      theme={theme}
      chosenChars={chosenChars}
      setChosenChars={setChosenChars}
      omitChars={omitChars}
      tagData={tagData}
      unique={unique}
      charData={charData}
      onSelectionScreen={onSelectionScreen}
      setOnSelectionScreen={setOnSelectionScreen}
      screenSize={screenSize}
    />
  </Background>)
}

export default AppComponent
