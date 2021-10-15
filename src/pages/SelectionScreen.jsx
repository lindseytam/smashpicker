import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'
import CharactersGrid from '../components/CharactersGrid'
import SplashScreen from './SplashScreen'
import Generate from '../components/Generate'
import Error from './../components/Error'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, setOnSelectionScreen, setNumPlayers, setTheme, setUnique, charData, tagData, omitChars, setOmitChars } = props
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [options, setOptions] = useState(['All Characters'])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (tagData.length !== 0) {
      const tags = Object.keys(tagData[0]).concat(options)
      setOptions(tags)
    }
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
    <React.Fragment>
    {!loaded && <SplashScreen/>}
    { loaded &&
      <>
        <div id="background-blur"/>
        <Error style={{ display: 'none', color: 'red' }}/>
      </>}
    <div id="selection-panel" className="parallelogram bordered drop-shadow center" style={{ display: loaded ? 'block' : 'none' }}>
      <div className="panel-contents" style={{ display: 'flex', height: '40rem', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <div id="button-bar">
          <DropdownButton name="playersDropdown" activeDropdown={activeDropdown === 'playersDropdown'} setActiveDropdown={setActiveDropdown} options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={playersOnSelect}>
            {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
          </DropdownButton>
          <DropdownButton name="themeDropdown" activeDropdown={activeDropdown === 'themeDropdown'} setActiveDropdown={setActiveDropdown} options={options} onChange={themeOnSelect}>
            {theme}
          </DropdownButton>
          <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        </div>

        <CharactersGrid
          charData={charData}
          setLoaded={setLoaded}
          omitChars={omitChars}
          setOmitChars={setOmitChars}
        />
        { loaded && <Generate theme={theme} omitChars={omitChars} tagData={tagData} charData={charData} unique={unique} numPlayers={numPlayers}/> }
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
    </div>
    </React.Fragment>)
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
  tagData: PropTypes.array,
  omitChars: PropTypes.array,
  setOmitChars: PropTypes.func
}

export default SelectionScreen
