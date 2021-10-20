import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './../components/Button'
import './../styles/Error.css'

function Error (props) {
  const { setError, screenSize } = (props)

  return (
    <div
      id="error"
      className={(screenSize === 'mobile')
        ? 'Error-Message bordered drop-shadow center'
        : 'Error-Message parallelogram bordered drop-shadow center'}>
        <div className="Error-Contents">

            <h2><i>Not enough characters enabled</i></h2>
            <p>Please enable more characters to choose from before continuing.</p>
            <Button
              className="uppercase extrabold italic"
              color="golden"
              onClick={() => setError(false)}
              style={{ top: '3em' }}
            >
            OK
            </Button>
        </div>
    </div>
  )
}

Error.propTypes = {
  setError: PropTypes.func,
  screenSize: PropTypes.string
}

export default Error
