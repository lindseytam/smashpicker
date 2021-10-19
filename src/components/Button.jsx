import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  const { children, color, className, onClick, style } = props

  return (
    <button style={{ ...style, display: 'inline' }} onClick={onClick} className={`${className} button-${color} button bordered drop-shadow parallelogram`}>
      <span>{children}</span>
    </button>
  )
}

function DropdownButton (props) {
  const { name, activeDropdown, setActiveDropdown, children, color, className, options, onChange, style } = props

  const toggleMenu = () => {
    if (activeDropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <div style={{ ...style, display: 'inline', position: 'relative' }} className='button-container'>
      <button onClick={toggleMenu} className={`${className} dropdown-button button-${color} button bordered drop-shadow parallelogram`}>
        <span>
          {children}
        </span>
      </button>
      <div className={`dropdown-content ${activeDropdown ? 'bordered' : ''} drop-shadow`} style={{ height: activeDropdown ? 'auto' : '0' }}>
        {options.map(e => <a className="dropdown-element" onClick={e => onChange(e.target.text)} value={e} key={e}>{e}</a>)}
      </div>
  </div>)
}

function ToggleButton (props) {
  const { children, curVal, toggleVal, style } = props
  const [enabled, setEnabled] = useState(curVal)

  const toggleButton = () => {
    setEnabled(!enabled)
    toggleVal()
  }

  useEffect(() => {
    setEnabled(curVal)
  }, [curVal])

  return (
    <button style={{ ...style, display: 'inline' }} onClick={toggleButton} className={`dropdown-button button-${enabled ? 'green' : 'red'} button bordered drop-shadow parallelogram`}>
      <span>
        {children}
      </span>
    </button>)
}

const basePropTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object
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
  style: PropTypes.object,
  children: basePropTypes.children,
  curVal: PropTypes.bool,
  toggleVal: PropTypes.func
}

Button.propTypes = buttonPropTypes
DropdownButton.propTypes = dropdownPropTypes
ToggleButton.propTypes = togglePropTypes

export { DropdownButton, Button, ToggleButton }
