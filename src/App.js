import logo from './logo.svg'
import './styles/App.css'

import { DropdownButton, Button } from './Button'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="outline">Smash Picker</h1>
        <Button className="uppercase extrabold" color="golden">
          Generate
        </Button>
        <DropdownButton options={['1', '2', '3']} onChange={s => console.log(s.target.value)}/>
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
