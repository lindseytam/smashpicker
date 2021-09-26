import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/Button'

function ResultScreen (props) {
  const { numPlayers, theme } = props

  return (
    <div>
        <p>Num players: {numPlayers}</p>
        <p>Theme: {theme}</p>
        <Button className="uppercase extrabold" color="golden">Shuffle</Button>
    </div>)
}

ResultScreen.propTypes = {
  numPlayers: PropTypes.int,
  theme: PropTypes.string
}

export default ResultScreen
