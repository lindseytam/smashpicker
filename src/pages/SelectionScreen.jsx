import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, setOnSelectionScreen, setNumPlayers, setTheme, setUnique } = props
  const [activeDropdown, setActiveDropdown] = useState(null)

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
      <div className="panel-contents">
        <div id="button-bar">
          <DropdownButton name="playersDropdown" activeDropdown={activeDropdown === 'playersDropdown'} setActiveDropdown={setActiveDropdown} options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={playersOnSelect}>
            {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
          </DropdownButton>
          <DropdownButton name="themeDropdown" activeDropdown={activeDropdown === 'themeDropdown'} setActiveDropdown={setActiveDropdown} options={['All Characters', 'Fire Emblem', 'Humanoids']} onChange={themeOnSelect}>
            {theme}
          </DropdownButton>
          <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        </div>
        <Button className="uppercase extrabold" color="golden" onClick={() => setOnSelectionScreen(false)}>Generate</Button>
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
  setUnique: PropTypes.func
}

export default SelectionScreen
