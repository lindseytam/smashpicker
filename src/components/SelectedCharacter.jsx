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
  const { characterName, characterImgUrl, playerNum, screenSize } = props

  const desktopView = () => {
    return (
      <div
        className='selected-character-box selection'
        style={{
          backgroundColor: 'var(--' + playerColors[playerNum] + ')'
        }}
      >
        <h2 className="Player-Num">P{playerNum}</h2>

        <div className="content">
          <img src={characterImgUrl}/>
          <div className="char-name-border"/>
          <div className="name-box desktop-slant">
            <h1 className="Selected-Char-Name">{characterName}</h1>
          </div>
        </div>
      </div>
    )
  }

  const mobileView = () => {
    return (
      <div className="Selected-Char">
        <h2 className="Player-Num">P{playerNum}</h2>
        <div className="parallelogram drop-shadow">
          <div
            className='selected-character-box selection'
            style={{
              backgroundColor: 'var(--' + playerColors[playerNum] + ')'
            }}
          >
            <div className="content">
              <img src={characterImgUrl}/>
              <div className="name-box mobile-slant"/>
                <div className="name-box ">
                  <h1 className="Selected-Char-Name">{characterName}</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    {screenSize === 'mobile' ? mobileView() : desktopView()}
    </>
  )
}

SelectedCharacter.propTypes = {
  characterName: PropTypes.string,
  characterImgUrl: PropTypes.string,
  playerNum: PropTypes.number,
  screenSize: PropTypes.string
}

export default SelectedCharacter
