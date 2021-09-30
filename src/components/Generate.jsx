import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Generate (props) {
  const { theme, omitChars, tagData, charData, unique } = props
  const [valid, setValid] = useState([])

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

  useEffect(() => {
    setChars()
  }, [theme, charData, omitChars])

  return (
      <div style={{ color: 'black' }}>
          {'theme', JSON.stringify(theme)}
          <br/>
          {'omitChars', JSON.stringify(omitChars)}
          <br/>
          {'valid=', JSON.stringify(valid)}
      </div>
  )
}

Generate.propTypes = {
  theme: PropTypes.string,
  omitChars: PropTypes.array,
  tagData: PropTypes.array,
  charData: PropTypes.array,
  unique: PropTypes.bool
}

export default Generate
