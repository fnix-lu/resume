import React, { Component } from 'react'
import css from './App.scss'

import Resume from '@/views/Resume'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={css['app']}>
        <Resume />
      </div>
    )
  }
}

export default App
