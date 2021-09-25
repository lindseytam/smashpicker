import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  const { children, color, className, onClick } = props

  return (
    <button onClick={onClick} className={`${className} button-${color} button parallelogram`} href="#">
      <span>{children}</span>
    </button>
  )
}

function DropdownButton (props) {
  const { children, color, className, options, onChange } = props

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className='button-container'>
      <button className={`${className} dropdown-button button-${color} button parallelogram`}>
        <span onClick={toggleMenu}>
          {children}
        </span>
      </button>
        {open &&
            <div className="dropdown-content">
              {options.map(e => <a onClick={e => onChange(e.target.text)} value={e} key={e}>{e}</a>)}
            </div>
        }
  </div>)
}

function ToggleButton (props) {
  const { children } = props
  const [enabled, setEnabled] = useState(true)

  const toggleButton = () => {
    setEnabled(!enabled)
  }

  return (
      <button onClick={toggleButton} className={`dropdown-button button-${enabled ? 'green' : 'red'} button parallelogram`}>
        <span>
          {children}
        </span>
      </button>)
}

const basePropTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
}

const buttonPropTypes = {
  ...basePropTypes
}

const dropdownPropTypes = {
  ...basePropTypes,
  options: PropTypes.array,
  onChange: PropTypes.func
}

const togglePropTypes = {
  children: basePropTypes.children
}

Button.propTypes = buttonPropTypes
DropdownButton.propTypes = dropdownPropTypes
ToggleButton.propTypes = togglePropTypes

export { DropdownButton, Button, ToggleButton }
