import React, { Component } from 'react'

import './App.css';
import BoardsList from './components/BoardsList';


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BoardsList />
      </React.Fragment>
    )
  }
}


