import React from 'react'
import PropTypes from 'prop-types'
import img from '../assets/background.png'

const playerColors = {
  1: 'red',
  2: 'blue',
  3: 'yellow',
  4: 'green',
  5: 'orange',
  6: 'cyan',
  7: 'pink',
  8: 'purple'
}

function SelectedCharacter (props) {
  const { characterName, characterImgUrl, playerNum } = props

  return (
    <div
      className='selected-character-box parallelogram'
      style={{ backgroundColor: 'var(--' + playerColors[playerNum] + ')' }}
    >
      <h2 style={{ position: 'absolute', left: '3%' }}>P{playerNum}</h2>
      <div className="content ">
        <img src={characterImgUrl}/>
        <div className="name-box parallelogram" style={{ width: '100%', backgroundColor: 'var(--orange)' }}>
          <h1 className="Selected-Char" style={{ fontSize: '42px' }}>{characterName}</h1>
        </div>
      </div>
    </div>
  )
}

SelectedCharacter.propTypes = {
  children: PropTypes.any
}

export default SelectedCharacter
