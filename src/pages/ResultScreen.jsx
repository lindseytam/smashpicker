import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import Generate from '../components/Generate'
import SelectedCharacter from '../components/SelectedCharacter'
import './../styles/ResultScreen.css'
import logo from '../assets/loading-logo.png'

function ResultScreen (props) {
  const { numPlayers, theme, chosenChars, setChosenChars, omitChars, tagData, unique, charData, onSelectionScreen, setOnSelectionScreen, screenSize } = props
  const [shuffle, setShuffle] = useState(false)
  const [imgsToLoad, setImgsToLoad] = useState(chosenChars.length - 1)

  useEffect(() => {
    setImgsToLoad(chosenChars.length - 1)
  }, [chosenChars])

  // helper function to wait X seconds
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const handleShuffle = async () => {
    setShuffle(true)
    await delay(100) // wait for .1 second
    setShuffle(false)
  }

  const onImgLoad = () => {
    setImgsToLoad(prevValue => prevValue - 1)
  }

  const renderImg = () => {
    const isError = chosenChars.includes(null) ||
      chosenChars.includes(undefined) ||
      charData[0].length === 0
    if (!isError) {
      return (
        chosenChars.map((char, i) =>
          (char !== undefined) && (charData[0][char] !== undefined) &&
           <SelectedCharacter
            key={char}
            onImgLoad={onImgLoad}
            characterName={charData[0][char].Name}
            characterImgUrl={charData[0][char].Img}
            playerNum={i + 1}
            screenSize={screenSize}
          />
        )
      )
    } else return null
  }

  if (onSelectionScreen) {
    return <span />
  }

  return (
    <>
      <div
        id="results-screen"
        className={(screenSize === 'mobile') ? 'container' : 'Results-Screen'}
      >
        {imgsToLoad > 0 && screenSize !== 'mobile' && <img src={logo} className="loading-logo" alt="logo" />}
        <div
          style={{ display: imgsToLoad <= 0 ? 'flex' : 'none' }}
          className={ (screenSize === 'mobile')
            ? 'results-container drop-shadow'
            : 'parallelogram results-container res'}
        >
          {renderImg()}
        </div>
        <div className="Result-Buttons-Container">
          <Button onClick={() => setOnSelectionScreen(true)} className="uppercase extrabold"><span>Back</span></Button>
          <Button onClick={handleShuffle} className="uppercase extrabold" color="golden">Shuffle</Button>
        </div>
      </div>
      {shuffle &&
        <Generate
          chosenChars={chosenChars}
          setChosenChars={setChosenChars}
          theme={theme} omitChars={omitChars}
          tagData={tagData}
          charData={charData}
          unique={unique}
          numPlayers={numPlayers}
          setError={() => null}
        />
      }
    </>
  )
}

ResultScreen.propTypes = {
  numPlayers: PropTypes.number,
  theme: PropTypes.string,
  chosenChars: PropTypes.array,
  setChosenChars: PropTypes.func,
  omitChars: PropTypes.array,
  tagData: PropTypes.array,
  unique: PropTypes.bool,
  charData: PropTypes.array,
  setOnSelectionScreen: PropTypes.func,
  screenSize: PropTypes.string,
  onSelectionScreen: PropTypes.bool
}

export default ResultScreen
