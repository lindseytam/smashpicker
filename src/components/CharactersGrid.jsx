import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function CharactersGrid (props) {
  const { charData, tagData, setLoaded } = props
  const [imagesToLoad, setImagesToLoad] = useState(null)

  useEffect(() => {
    if (charData.length > 0) {
      setImagesToLoad(charData.length)
    }
  }, [charData])

  useEffect(() => {
    if (imagesToLoad === 0) {
      setLoaded(true)
    }
  }, [imagesToLoad])

  const data = (charData.length === 0) ? [] : Object.keys(charData[0])

  const renderImg = (item) => {
    const imgPath = charData[0][item].Img
    return (
        <img src={imgPath} onLoad={() => setImagesToLoad(imagesToLoad - 1)} />
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
  tagData: PropTypes.array,
  setLoaded: PropTypes.func
}

export default CharactersGrid
