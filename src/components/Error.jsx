import React from 'react'
import './../styles/Error.css'

function Error () {
  const handleClick = () => {
    document.getElementById('error').style.display = 'none'
    document.getElementById('background-blur').style.display = 'none'
  }

  return (
    <div id="error" className="Error-Message">
        <h2>Not enough characters enabled</h2>
        <p>Please enable more characters to choose from before continuing.</p>
        <button onClick={() => handleClick()}> OK </button>
    </div>
  )
}

export default Error
