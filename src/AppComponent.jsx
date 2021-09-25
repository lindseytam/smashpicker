import React, { useState } from 'react'
import SelectionScreen from './SelectionScreen'
import ResultScreen from './ResultScreen'

function AppComponent (props) {
  const [onSelectionScreen, setOnSelectionScreen] = useState(true)
  const [numPlayers, setNumPlayers] = useState(4)
  const [theme, setTheme] = useState('All Characters')

  if (onSelectionScreen) {
    return <SelectionScreen setOnSelectionScreen={setOnSelectionScreen} setNumPlayers={setNumPlayers} setTheme={setTheme}/>
  } else {
    <ResultScreen numPlayers={numPlayers} theme={theme}/>
  }
}

export default AppComponent
