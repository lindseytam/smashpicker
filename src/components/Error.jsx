import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './../styles/Error.css'

function Error (props) {
  const { setError } = (props)

  const handleClick = () => {
    setError(false)
  }

  return (
    <div id="error" className="Error-Message">
        <h2>Not enough characters enabled</h2>
        <p>Please enable more characters to choose from before continuing.</p>
        <button onClick={() => handleClick()}> OK </button>
    </div>
  )
}

Error.propTypes = {
  setError: PropTypes.func
}

export default Error
