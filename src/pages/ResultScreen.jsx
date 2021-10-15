import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import Generate from '../components/Generate'

function ResultScreen (props) {
  const { numPlayers, theme, chosenChars, setChosenChars, omitChars, tagData, unique, charData } = props
  const [shuffle, setShuffle] = useState(false)

  // helper function to wait X seconds
  const delay = ms => new Promise(res => setTimeout(res, ms))

  const handleShuffle = async () => {
    setShuffle(true)
    await delay(500) // wait for half a second
    setShuffle(false)
  }

  return (
    <div>
        <p>Num players: {numPlayers}</p>
        <p>Theme: {theme}</p>
        <p>Chosen Chars: {chosenChars}</p>
        <Button onClick={handleShuffle} className="uppercase extrabold" color="golden">Shuffle</Button>
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
    </div>)
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
