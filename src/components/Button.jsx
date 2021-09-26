import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  const { children, color, className, onClick } = props

  return (
    <button onClick={onClick} className={`${className} button-${color} button drop-shadow parallelogram`} href="#">
      <span>{children}</span>
    </button>
  )
}

function DropdownButton (props) {
  const { name, activeDropdown, setActiveDropdown, children, color, className, options, onChange } = props

  // const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    // setOpen(!open)
    if (activeDropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <div className='button-container'>
      <button onClick={toggleMenu} className={`${className} dropdown-button button-${color} button drop-shadow parallelogram`}>
        <span>
          {children}
        </span>
      </button>
        {activeDropdown &&
            <div className="dropdown-content drop-shadow">
              {options.map(e => <a className="dropdown-element" onClick={e => onChange(e.target.text)} value={e} key={e}>{e}</a>)}
            </div>
        }
  </div>)
}

function ToggleButton (props) {
  const { children, curVal, toggleVal } = props
  const [enabled, setEnabled] = useState(curVal)

  const toggleButton = () => {
    setEnabled(!enabled)
    toggleVal()
  }

  return (
      <button onClick={toggleButton} className={`dropdown-button button-${enabled ? 'green' : 'red'} button drop-shadow parallelogram`}>
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
  children: basePropTypes.children,
  curVal: PropTypes.bool,
  toggleVal: PropTypes.func
}

Button.propTypes = buttonPropTypes
DropdownButton.propTypes = dropdownPropTypes
ToggleButton.propTypes = togglePropTypes

export { DropdownButton, Button, ToggleButton }
