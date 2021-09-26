import React, { useState } from 'react'
import SelectionScreen from './pages/SelectionScreen'
import ResultScreen from './pages/ResultScreen'

function AppComponent (props) {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')
  const [unique, setUnique] = useState(true)

  console.log(numPlayers)
  console.log(theme)
  console.log(unique)

  if (onSelectionScreen) {
    return (
    <SelectionScreen
      numPlayers={numPlayers}
      theme={theme}
      unique={unique}
      setOnSelectionScreen={setOnSelectionScreen}
      setNumPlayers={setNumPlayers}
      setTheme={setTheme}
      setUnique={setUnique}
    />)
  } else {
    return <ResultScreen numPlayers={numPlayers} theme={theme} unique={unique}/>
  }
}

export default AppComponent
