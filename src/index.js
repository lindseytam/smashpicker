import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

import AppComponent from './AppComponent'
import FirebaseConnector from './FirebaseConnector/FirebaseConnector'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <header className="App-header">
      <h1 className="outline" style={{ margin: '.2em' }}>Smash Picker</h1>
    </header>
    <FirebaseConnector />

    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
