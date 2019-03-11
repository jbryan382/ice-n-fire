import React, { Component } from 'react'
import Axios from 'axios'

// API URL = https://anapioficeandfire.com/api/characters/583

class App extends Component {
  state = {
    character: [],
    house: [],
    id: []
  }
  componentDidMount() {
    Axios.get(`https://anapioficeandfire.com/api/houses/362`).then(resp => {
      console.log({ resp })
      this.setState({
        character: resp.data.character,
        house: resp.data.house,
        id: resp.data.id
      })
    })
  }
  render() {
    return (
      <>
        <header>
          <h1>The House of Stark</h1>
          <h2>The Main Nuclear Family</h2>
          <ul>
            <li />
          </ul>
        </header>
      </>
    )
  }
}

export default App
