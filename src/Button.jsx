import { Button as BSButton } from 'react-bootstrap'
import React from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  const { color, className } = props

  return (
    <a className={`${className} button-${color} button parallelogram`} href="#">
      <span className={'button-text skew-fix italic'}>{props.children}</span>
    </a>
  )
}

function DropdownButton (props) {
  const { color, className, options, onChange } = props

  return (
    <div className={`${className} dropdown-button button-${color} button parallelogram`} style={{ padding: 0 }}>
      <select className={'skew-fix'} onChange={onChange}>
        {
          options.map(e => <option className="skew-fix" value={e} key={e}>{e}</option>)
        }
      </select>
    </div>
  )
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

export { DropdownButton, Button }
