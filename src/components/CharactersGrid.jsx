import React from 'react'
import PropTypes from 'prop-types'
import './../styles/CharactersGridStyle.css'

function CharactersGrid (props) {
  const { charData } = props
  const data = (charData.length === 0) ? [] : Object.keys(charData[0])

  const renderImg = (item) => {
    const imgPath = charData[0][item].Img
    return (
      <div className="column">
        <div className="card">
          <img className="Char-Img" src={imgPath}/>
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
  tagData: PropTypes.array
}

export default CharactersGrid
