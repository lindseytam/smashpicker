import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  const { color, className, onClick } = props

  return (
    <a onClick={onClick} className={`${className} button-${color} button parallelogram`} href="#">
      <span className={'button-text'}>{props.children}</span>
    </a>
  )
}

function DropdownButton (props) {
  const { color, className, options, onChange } = props

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className='button-container'>
      <button className={`${className} dropdown-button button-${color} button parallelogram`}>
        <span onClick={toggleMenu}>
          {props.children}
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
  const { color, className, onChange } = props

  const [enabled, setEnabled] = useState(true)

  const toggleButton = () => {
    setEnabled(!enabled)
  }

  return (
      <button className={`${className} dropdown-button button-${enabled ? 'green' : 'red'} button parallelogram`}>
        <span onClick={toggleButton}>
          {props.children}
        </span>
      </button>)
}

const basePropTypes = {
  color: PropTypes.string,
  className: PropTypes.string
}

const buttonPropTypes = {
  ...basePropTypes,
  children: PropTypes.any
}

const dropdownPropTypes = {
  ...basePropTypes,
  options: PropTypes.array,
  onChange: PropTypes.func
}

Button.propTypes = buttonPropTypes
DropdownButton.propTypes = dropdownPropTypes

export { DropdownButton, Button, ToggleButton }
