import logo from './logo.svg'
import './styles/App.css'

import { DropdownButton, Button, ToggleButton } from './Button'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="outline">Smash Picker</h1>
        <Button className="uppercase extrabold" color="golden">
          Generate
        </Button>
        <DropdownButton options={['1 Player', '2 Players', '3 Players', '4 Players', '5 Players', '6 Players', '7 Players', '8 Players']} onChange={val => console.log(val)}>Number of Players</DropdownButton>
        <DropdownButton options={['All Characters', 'Fire Emblem', 'Humanoids']} onChange={val => console.log(val)}>Number of Players</DropdownButton>
        <ToggleButton>Unique</ToggleButton>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
