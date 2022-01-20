import '@reach/dialog/styles.css'
import Dialog from '@reach/dialog'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  const close = () => setOpenModal('none')

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>

      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>

      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={close}
      >
        <div>
          <button onClick={close}>Close</button>
        </div>
        <h3>Login</h3>
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={openModal === 'register'}
        onDismiss={close}
      >
        <div>
          <button onClick={close}>Close</button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
