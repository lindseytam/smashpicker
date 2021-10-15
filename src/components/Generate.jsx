import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function Generate (props) {
  const { theme, omitChars, tagData, charData, unique, numPlayers, setError, chosenChars, setChosenChars } = props
  const [valid, setValid] = useState([]) // tracks which chars match criteria

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
    setError(includesError)
  }, [chosenChars])

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
