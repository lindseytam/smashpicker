import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'
import CharactersGrid from '../components/CharactersGrid'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, setOnSelectionScreen, setNumPlayers, setTheme, setUnique, charData, tagData } = props
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [options, setOptions] = useState(['All Characters'])
  // const options = ['All Characters']

  useEffect(() => {
    // getCharData()
    console.log('tagData', tagData)
    if (tagData.length !== 0) {
      const tags = Object.keys(tagData[0]).concat(options)
      setOptions(tags)
    }

    // getTagData()
  }, [tagData])

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
      <div className="panel-contents" style={{ height: '40rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div id="button-bar">
          <DropdownButton name="playersDropdown" activeDropdown={activeDropdown === 'playersDropdown'} setActiveDropdown={setActiveDropdown} options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={playersOnSelect}>
            {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
          </DropdownButton>
          <DropdownButton name="themeDropdown" activeDropdown={activeDropdown === 'themeDropdown'} setActiveDropdown={setActiveDropdown} options={options} onChange={themeOnSelect}>
            {theme}
          </DropdownButton>
          <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        </div>

        <CharactersGrid charData={charData} tagData={tagData}/>

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
