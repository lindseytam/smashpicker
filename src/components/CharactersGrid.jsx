import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './../styles/CharactersGridStyle.css'

function CharactersGrid (props) {
  const { theme, tagData, charData, setLoaded, omitChars, setOmitChars } = props
  const [imagesToLoad, setImagesToLoad] = useState(null)

  useEffect(() => {
    if (charData.length > 0 && Object.keys(charData[0]).length > 0) {
      setImagesToLoad(Object.keys(charData[0]).length)
    }
  }, [charData])

  useEffect(() => {
    if (imagesToLoad === 0) {
      setLoaded(true)
    }
  }, [imagesToLoad])

  useEffect(() => {
    if (theme === 'Random Theme') {
      setLoaded(true)
    }
  }, [theme])

  const data = (charData.length === 0) ? [] : Object.keys(charData[0])

  const clickImg = (e) => {
    // remove from omit list
    if (omitChars.includes(e.target.id)) {
      const valid = omitChars.filter(elem => elem !== e.target.id)
      setOmitChars(valid)

      // add to omit list
    } else {
      const invalid = [...omitChars, e.target.id]
      setOmitChars(invalid)
    }
  }

  const renderImg = (item) => {
    const imgPath = charData[0][item].Img
    const id = charData[0][item].Name
    const validChars = (theme === 'All Characters' || theme === 'Random Theme') ? Object.keys(charData[0]) : tagData[0][theme]
    return (
      <div key={item} className={omitChars.includes(id) || !validChars.includes(id) ? 'Omit column' : 'column' }>
        <div className="card">
          <img
            id={id}
            onClick={clickImg}
            className="Char-Img"
            src={imgPath}
            onLoad={() => setImagesToLoad(imagesToLoad - 1)}
          />
        </div>
      </div>

    )
  }
  return (
    <div className="Char-Grid">
       <div className="row">
         {data.map((item) => renderImg(item))}
       </div>
    </div>
  )
}

CharactersGrid.propTypes = {
  theme: PropTypes.string,
  tagData: PropTypes.array,
  charData: PropTypes.array,
  omitChars: PropTypes.array,
  setOmitChars: PropTypes.func,
  setLoaded: PropTypes.func
}

export default CharactersGrid
