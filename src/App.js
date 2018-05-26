import React, { Component } from 'react'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount = () => {
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
  }

  handleUnauth = () => {
    this.setState({ uid: null })
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} uid={this.state.uid} />
            : <SignIn />
        }

      </div>
    )
  }
}

export default App
