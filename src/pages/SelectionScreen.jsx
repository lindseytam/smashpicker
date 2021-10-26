import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DropdownButton, Button, ToggleButton } from '../components/Button'
import CharactersGrid from '../components/CharactersGrid'
import SplashScreen from './SplashScreen'
import Generate from '../components/Generate'
import Error from './../components/Error'

function SelectionScreen (props) {
  const { theme, numPlayers, unique, onSelectionScreen, setOnSelectionScreen, setNumPlayers, setTheme, setUnique, charData, tagData, omitChars, setOmitChars, chosenChars, setChosenChars, screenSize } = props
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [options, setOptions] = useState(['Random Theme', 'All Characters'])
  const [loaded, setLoaded] = useState((charData.length !== 0))
  const [error, setError] = useState(false) // tracks which chars match criteria

  useEffect(() => {
    if (tagData.length !== 0) {
      const tags = Object.keys(tagData[0]).concat(options)
      const uniqueTags = [...new Set(tags)] // ensure all vals are unique
      setOptions(uniqueTags)
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

  const handleScreenChange = () => {
    const includesError = chosenChars.includes(null) || chosenChars.includes(undefined)
    if (includesError) setError(true)
    else setOnSelectionScreen(false)
  }

  return (
    <div style={{ display: onSelectionScreen ? 'block' : 'none' }}>
    {!loaded && <SplashScreen/>}
    { loaded && error &&
          <React.Fragment>
            <div id="background-blur"/>
            <Error screenSize={screenSize} setError={setError} />
          </React.Fragment>
    }
    <div
      id="selection-panel"
      className={(screenSize === 'mobile') ? 'container bordered drop-shadow' : 'parallelogram bordered drop-shadow center' }
      style={{ display: loaded ? 'block' : 'none' }}
    >
      <div className="panel-contents">
        <div id="button-bar">
          <DropdownButton
            name="playersDropdown"
            activeDropdown={activeDropdown === 'playersDropdown'}
            setActiveDropdown={setActiveDropdown}
            options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']}
            onChange={playersOnSelect}
          >
            {`${numPlayers} ${numPlayers > 1 ? 'Players' : 'Player'}`}
          </DropdownButton>
          <DropdownButton name="themeDropdown" activeDropdown={activeDropdown === 'themeDropdown'} setActiveDropdown={setActiveDropdown} options={options} onChange={themeOnSelect}>
            {theme}
          </DropdownButton>
          <ToggleButton curVal={unique} toggleVal={() => setUnique(!unique)}>{unique ? 'Unique' : 'Not Unique'}</ToggleButton>
        </div>

        <CharactersGrid
          theme={theme}
          tagData={tagData}
          charData={charData}
          setLoaded={setLoaded}
          omitChars={omitChars}
          setOmitChars={setOmitChars}
        />
        { loaded && <Generate chosenChars={chosenChars} setChosenChars={setChosenChars} theme={theme} omitChars={omitChars} tagData={tagData} charData={charData} unique={unique} numPlayers={numPlayers} setError={setError}/> }
        <Button
          className="uppercase extrabold italic"
          color="golden"
          onClick={() => handleScreenChange()}
          style={{ top: '2em' }}
          >
          Generate
        </Button>
      </div>
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
  tagData: PropTypes.array,
  omitChars: PropTypes.array,
  setOmitChars: PropTypes.func,
  chosenChars: PropTypes.array,
  setChosenChars: PropTypes.func,
  screenSize: PropTypes.string,
  onSelectionScreen: PropTypes.bool
}

export default SelectionScreen
