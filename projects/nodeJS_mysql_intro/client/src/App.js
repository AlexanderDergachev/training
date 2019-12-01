import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/promo')
      .then(responce => responce.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        <h1>it works</h1>
      </div>
    )
  }
}


