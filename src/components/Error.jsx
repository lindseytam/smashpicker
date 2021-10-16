import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './../components/Button'
import './../styles/Error.css'

function Error (props) {
  const { setError } = (props)

  return (
    <div id="error" className="Error-Message parallelogram bordered drop-shadow center">
        <div className="Error-Contents">

            <h2><i>Not enough characters enabled</i></h2>
            <p>Please enable more characters to choose from before continuing.</p>
            <Button
                className="uppercase extrabold italic"
                color="golden"
                onClick={() => setError(false)}
                style={{
                  position: 'relative',
                  top: '2.5em'
                }}
            >
            OK
            </Button>
        </div>
    </div>
  )
}

Error.propTypes = {
  setError: PropTypes.func
}

export default Error
