import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function Generate (props) {
  const { theme, omitChars, tagData, charData, unique, numPlayers } = props
  const [valid, setValid] = useState([]) // tracks which chars match criteria
  const [chosenChars, setChosenChars] = useState([]) // tracks which chars are chosen

  const setChars = () => {
    // user chose all chars
    if (charData.length !== 0 && theme === 'All Characters') { removeInvalid(Object.keys(charData[0])) }

    // user chose firebase theme
    else if (charData.length !== 0) { removeInvalid(tagData[0][theme]) }
  }

  // remove omitted chars
  const removeInvalid = (allOptions) => {
    const remove = allOptions.filter((item) => !omitChars.includes(item))
    setValid(remove)
  }

  // choose all chars
  const chooseAllChars = () => {
    const chosen = []
    let validChars = _.cloneDeep(valid)

    for (let i = 0; i < numPlayers; i++) {
      const choose = chooseChar(validChars)
      chosen.push(choose)
      if (unique) {
        validChars = validChars.filter(function (e) { return e !== choose })
      }
    }

    setChosenChars(chosen)
  }

  // choose a random char from array
  const chooseChar = (chooseFrom) => {
    const index = Math.floor(Math.random() * chooseFrom.length)
    return chooseFrom[index]
  }

  useEffect(() => {
    setChars()
  }, [theme, charData, omitChars])

  useEffect(() => {
    chooseAllChars()
  }, [valid, unique])

  useEffect(() => {
    const includesError = chosenChars.includes(null) || chosenChars.includes(undefined)
  }, [chosenChars])

  return (
      <div style={{ color: 'black' }}>
          theme={JSON.stringify(theme)}
          <br/>
          omitChars={'omitChars', JSON.stringify(omitChars)}
          <br/>
          choose_from={'valid=', JSON.stringify(valid)}
          <br/>
          chosen={'chosenChars=', JSON.stringify(chosenChars)}
      </div>
  )
}

Generate.propTypes = {
  theme: PropTypes.string,
  omitChars: PropTypes.array,
  tagData: PropTypes.array,
  charData: PropTypes.array,
  unique: PropTypes.bool,
  numPlayers: PropTypes.number

}

export default Generate
