import React from 'react'
import List from './List'

class App extends React.Component {
  render () {
    let title = "TITLE"
    
    return (
      <div>
        <List title={title}/>
      </div>
    )
  }
}

export default App;