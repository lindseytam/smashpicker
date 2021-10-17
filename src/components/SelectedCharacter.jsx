import React from 'react'
import PropTypes from 'prop-types'

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
        <div className="char-name-border"></div>
        <div className="name-box parallelogram char-name" style={{ width: '100%', backgroundColor: 'var(--beige)' }}>
          <h1 style={{ color: 'black', fontSize: '32px', paddingTop: '.5em', fontWeight: 'normal' }}>{characterName}</h1>
        </div>
      </div>
    </div>
  )
}

SelectedCharacter.propTypes = {
  characterName: PropTypes.string,
  characterImgUrl: PropTypes.string,
  playerNum: PropTypes.number
}

export default SelectedCharacter
