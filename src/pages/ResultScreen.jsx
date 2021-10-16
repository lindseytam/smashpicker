import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import Generate from '../components/Generate'
import SelectedCharacter from '../components/SelectedCharacter'
function ResultScreen (props) {
  const { numPlayers, theme, chosenChars, setChosenChars, omitChars, tagData, unique, charData } = props
  const [shuffle, setShuffle] = useState(false)

  // helper function to wait X seconds
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  const handleShuffle = async () => {
    setShuffle(true)
    await delay(500) // wait for half a second
    setShuffle(false)
  }

  const renderImg = () => {
    const isError = chosenChars.includes(null) || chosenChars.includes(undefined)
    if (!isError) {
      return (
        chosenChars.map(char =>
          (char !== undefined) &&
           <SelectedCharacter
            key={char}
            characterName={charData[0][char].Name}
            characterImgUrl={charData[0][char].Img}
            playerNum={1}
          />
        )
      )
    } else return null
  }

  return (
    <>
      <div id="results-screen">
        <div className="results-container">
          {renderImg()}
        </div>
      </div>
      <p>Num players: {numPlayers}</p>
      <p>Theme: {theme}</p>
      <p>Chosen Chars: {chosenChars}</p>
      <div>
        <Button className="uppercase extrabold"><h3>Back</h3></Button>
        <Button onClick={handleShuffle} className="uppercase extrabold" color="golden">Shuffle</Button>
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
  charData: PropTypes.Array
}

export default ResultScreen
