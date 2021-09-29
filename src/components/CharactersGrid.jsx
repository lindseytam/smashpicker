import React from 'react'
import PropTypes from 'prop-types'
import './../styles/CharactersGridStyle.css'

function CharactersGrid (props) {
  const { charData, omitChars, setOmitChars } = props
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
    return (
      <div className={(omitChars.includes(id)) ? 'Omit column' : 'column' }>
        <div className="card">
          <img
            id={id}
            onClick={clickImg}
            className="Char-Img"
            src={imgPath}
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
  charData: PropTypes.array,
  tagData: PropTypes.array,
  omitChars: PropTypes.array,
  setOmitChars: PropTypes.func
}

export default CharactersGrid
