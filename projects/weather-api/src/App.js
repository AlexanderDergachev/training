import React, { Component } from 'react';

const API_KEY = '15845acd4a29de499a73108e1e7d77eb';



export default class App extends Component {
  getWeather = async e => {
    e.preventDefault();
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>WEATHER API</h1>
        <form onSubmit={this.getWeather}>
          <input name='city' type="text"/>
          <input name='country' type="text"/>
          <button>get weather</button>
        </form>
      </div>
    )
  }
}


