import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, setOnSelectionScreen, setNumPlayers, setTheme, setUnique } = props
  const [activeDropdown, setActiveDropdown] = useState(null)

  const parsePlayers = (val) => {
    const numPlayers = parseInt(val.split(' ')[0])
    setNumPlayers(numPlayers)
  }

  return (
    <div>
        <DropdownButton activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={parsePlayers}>
          {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
        </DropdownButton>
        <DropdownButton activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} options={['All Characters', 'Fire Emblem', 'Humanoids']} onChange={val => setTheme(val)}>
          {theme}
        </DropdownButton>
        <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        <Button className="uppercase extrabold" color="golden" onClick={() => setOnSelectionScreen(false)}>Generate</Button>
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
