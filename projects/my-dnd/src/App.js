import './App.css';
import React, { Component } from 'react'
import  Board  from './components/Board'
import  Card from './components/Card'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>Card three</p>
            </Card>
          </Board>
        </main>
      </div>
    )
  }
}

