import React from 'react'
import PropTypes from 'prop-types'

function CharactersGrid (props) {
  const { charData, tagData } = props
  const data = (charData.length === 0) ? [] : Object.keys(charData[0])

  const renderImg = (item) => {
    const imgPath = charData[0][item].Img
    return (
        <img src={imgPath}/>
    )
  }
  return (

    <div>
       {data.map((item) => renderImg(item))}
    </div>
  )
}

CharactersGrid.propTypes = {
  charData: PropTypes.array,
  tagData: PropTypes.array
}

export default CharactersGrid
