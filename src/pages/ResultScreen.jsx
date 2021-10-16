import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'
import SelectedCharacter from '../components/SelectedCharacter'
function ResultScreen (props) {
  const { numPlayers, theme } = props

  return (
    <div id="results-screen">
      <div className="results-container">
      <SelectedCharacter
        characterName="Mario"
        characterImgUrl="https://firebasestorage.googleapis.com/v0/b/smash-89ac9.appspot.com/o/mario.png?alt=media&token=76a2f0d4-4c8c-4d16-9ed6-800b7bb1f55f"
        playerNum={1}
      />

      <SelectedCharacter
        characterName="Mario"
        characterImgUrl="https://firebasestorage.googleapis.com/v0/b/smash-89ac9.appspot.com/o/mario.png?alt=media&token=76a2f0d4-4c8c-4d16-9ed6-800b7bb1f55f"
        playerNum={1}
      />

      <SelectedCharacter
        characterName="Mario"
        characterImgUrl="https://firebasestorage.googleapis.com/v0/b/smash-89ac9.appspot.com/o/mario.png?alt=media&token=76a2f0d4-4c8c-4d16-9ed6-800b7bb1f55f"
        playerNum={1}
      />

      <SelectedCharacter
        characterName="Mario"
        characterImgUrl="https://firebasestorage.googleapis.com/v0/b/smash-89ac9.appspot.com/o/mario.png?alt=media&token=76a2f0d4-4c8c-4d16-9ed6-800b7bb1f55f"
        playerNum={1}
      />

      <SelectedCharacter
        characterName="Mario"
        characterImgUrl="https://firebasestorage.googleapis.com/v0/b/smash-89ac9.appspot.com/o/mario.png?alt=media&token=76a2f0d4-4c8c-4d16-9ed6-800b7bb1f55f"
        playerNum={1}
      />
      </div>
      <div>
        <Button className="uppercase extrabold"><h3>Back</h3></Button>
        <Button className="uppercase extrabold" color="golden"><h3>Shuffle</h3></Button>
      </div>
    </div>)
}

ResultScreen.propTypes = {
  numPlayers: PropTypes.int,
  theme: PropTypes.string
}

export default ResultScreen
