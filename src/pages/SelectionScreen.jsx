import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'
import CharactersGrid from '../components/CharactersGrid'
import SplashScreen from './SplashScreen'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, setOnSelectionScreen, setNumPlayers, setTheme, setUnique, charData, tagData } = props
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const playersOnSelect = (val) => {
    const numPlayers = parseInt(val.split(' ')[0])
    setNumPlayers(numPlayers)
    setActiveDropdown(null)
  }

  const themeOnSelect = (val) => {
    setTheme(val)
    setActiveDropdown(null)
  }

  return (
    <div id="selection-panel" className="parallelogram bordered drop-shadow center">
      {!loaded && <SplashScreen/>}
      <div className="panel-contents" style={{ display: loaded ? 'flex' : 'none', height: '40rem', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div id="button-bar">
          <DropdownButton name="playersDropdown" activeDropdown={activeDropdown === 'playersDropdown'} setActiveDropdown={setActiveDropdown} options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={playersOnSelect}>
            {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
          </DropdownButton>
          <DropdownButton name="themeDropdown" activeDropdown={activeDropdown === 'themeDropdown'} setActiveDropdown={setActiveDropdown} options={['All Characters', 'Fire Emblem', 'Humanoids']} onChange={themeOnSelect}>
            {theme}
          </DropdownButton>
          <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        </div>

        <CharactersGrid charData={charData} tagData={tagData} setLoaded={setLoaded}/>

        <Button
          className="uppercase extrabold italic"
          color="golden"
          onClick={() => setOnSelectionScreen(false)}
          style={{
            position: 'relative',
            top: '1.5em'
          }}
          >
          Generate
        </Button>
      </div>
    </div>)
}

SelectionScreen.propTypes = {
  theme: PropTypes.string,
  numPlayers: PropTypes.number,
  unique: PropTypes.bool,
  setOnSelectionScreen: PropTypes.func,
  setNumPlayers: PropTypes.func,
  setTheme: PropTypes.func,
  setUnique: PropTypes.func,
  charData: PropTypes.array,
  tagData: PropTypes.array
}

export default SelectionScreen
