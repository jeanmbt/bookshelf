// 🐨 you'll need to import React and ReactDOM up here

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from 'components/logo'

function App() {
  return (
    <div>
      <div>
        <Logo />
        <h1>Bookshelf</h1>
      </div>
      <div>
        <button onClick={() => console.log('Login click')}>Login</button>
        <button onClick={() => console.log('register click')}>Register</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
