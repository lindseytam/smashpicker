import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import Generate from '../components/Generate'
import SelectedCharacter from '../components/SelectedCharacter'
import './../styles/ResultScreen.css'

function ResultScreen (props) {
  const { numPlayers, theme, chosenChars, setChosenChars, omitChars, tagData, unique, charData, setOnSelectionScreen, screenSize } = props
  const [shuffle, setShuffle] = useState(false)

  // helper function to wait X seconds
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const handleShuffle = async () => {
    setShuffle(true)
    await delay(1000) // wait for one second
    setShuffle(false)
  }

  const renderImg = () => {
    const isError = chosenChars.includes(null) || chosenChars.includes(undefined)
    if (!isError) {
      return (
        chosenChars.map((char, i) =>
          (char !== undefined) &&
           <SelectedCharacter
            key={char}
            characterName={charData[0][char].Name}
            characterImgUrl={charData[0][char].Img}
            playerNum={i + 1}
            screenSize={screenSize}
          />
        )
      )
    } else return null
  }

  return (
    <>
      <div
        id="results-screen"
        className={(screenSize === 'mobile') ? 'container' : 'Results-Screen'}
      >
        <div
          className={ (screenSize === 'mobile')
            ? 'results-container drop-shadow'
            : 'parallelogram results-container bordered drop-shadow res'}
        >
          {renderImg()}
        </div>
        <div className="Result-Buttons-Container">
          <Button onClick={() => setOnSelectionScreen(true)} className="uppercase extrabold"><h3>Back</h3></Button>
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
  numPlayers: PropTypes.int,
  theme: PropTypes.string,
  chosenChars: PropTypes.Array,
  setChosenChars: PropTypes.func,
  omitChars: PropTypes.Array,
  tagData: PropTypes.array,
  unique: PropTypes.bool,
  charData: PropTypes.Array,
  setOnSelectionScreen: PropTypes.func,
  screenSize: PropTypes.string
}

export default ResultScreen
