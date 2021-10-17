import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function Generate (props) {
  const { theme, omitChars, tagData, charData, unique, numPlayers, setError, chosenChars, setChosenChars } = props
  const [valid, setValid] = useState([]) // tracks which chars match criteria

  const setChars = () => {
    if (charData.length !== 0 && theme === 'All Characters') { // user chose all chars
      removeInvalid(Object.keys(charData[0]))
    } else if (charData.length !== 0 && theme === 'Random Theme') { // user chose random theme
      const randomTheme = chooseChar(Object.keys(tagData[0]))
      console.log('randomTheme=', randomTheme)
      removeInvalid(tagData[0][randomTheme])
    } else if (charData.length !== 0) { removeInvalid(tagData[0][theme]) } // user chose firebase theme
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

  // choose a char from a random theme
  const chooseRandomTheme = () => {
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
  }, [theme, charData, omitChars, numPlayers])

  useEffect(() => {
    chooseAllChars()
  }, [valid, unique])

  useEffect(() => {
    const includesError = chosenChars.includes(null) || chosenChars.includes(undefined)
    setError(includesError)
  }, [chosenChars, numPlayers])

  return null
}

Generate.propTypes = {
  theme: PropTypes.string,
  omitChars: PropTypes.array,
  tagData: PropTypes.array,
  charData: PropTypes.array,
  unique: PropTypes.bool,
  numPlayers: PropTypes.number,
  chosenChars: PropTypes.array,
  setError: PropTypes.func
}

export default Generate
