import React from 'react'

import { DropdownButton, Button, ToggleButton } from './Button'

function SelectionScreen () {
  return (
    <div>
        <Button className="uppercase extrabold" color="golden">Generate</Button>
        <DropdownButton options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={val => console.log(val)}>Number of Players</DropdownButton>
        <DropdownButton options={['All Characters', 'Fire Emblem', 'Humanoids']} onChange={val => console.log(val)}>Number of Players</DropdownButton>
        <ToggleButton>Unique</ToggleButton>
    </div>)
}

export default SelectionScreen
