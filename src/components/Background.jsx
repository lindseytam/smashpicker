import React from 'react'
import PropTypes from 'prop-types'
import img from '../assets/background.png'

function Background (props) {
  const { children } = props

  return (<React.Fragment>
    {children}
    <div id="app-background">
      <div id="background-bar" />
      <img id="background-img" src={img}/>
    </div>
  </React.Fragment>
  )
}

Background.propTypes = {
  children: PropTypes.any
}

export default Background
