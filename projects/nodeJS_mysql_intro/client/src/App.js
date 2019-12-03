import React, { useState, useEffect } from 'react'
import './App.css';

export default function App() {

  useEffect(() => {
    fetch('http://localhost:8080/promo')
      .then(responce => responce.json())
      .then(data => console.log(data))
  })

  return (
    <div className="App">
      <h1>it works</h1>
    </div>
  )
}


