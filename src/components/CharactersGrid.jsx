import React from 'react'

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

export default CharactersGrid
