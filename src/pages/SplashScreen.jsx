import React from 'react'
import logo from '../assets/loading-logo.png'

function ResultScreen () {
  return (
    <div style={{ position: 'absolute', zIndex: 3, height: '100vh', width: '100vw', backgroundColor: 'var(--black)', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={logo} className="loading-logo" alt="logo" />
    </div>)
}

ResultScreen.propTypes = {
}

export default ResultScreen
