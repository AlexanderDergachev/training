import React, { Component } from 'react';
import WeatherInput from './components/WeatherInput'
import Weather from './components/Weather'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


const API_KEY = '15845acd4a29de499a73108e1e7d77eb';

export default class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    main: undefined,
    redirect: false,
    error: false
  }
  getWeather = async (city) => {
    if (city) {
      try {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({
          city: city,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          main: data.weather[0].main,
          redirect: true
        });
        this.setState({
          redirect: false,
          error: false
        });
      } catch (error) {
        this.setState({
          error: true
        });
      }
    }

  }
  render() {
 return (
      <div className="main">
        <BrowserRouter >
          <Route exact path="/" render={() => (this.state.redirect ? (<Redirect push to={`/:${this.state.city}`} />) :
            (<WeatherInput error={this.state.error} getWeather={this.getWeather}></WeatherInput>))} />
          <Route exact path="/:city" component={() => <Weather
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            main={this.state.main}
          />} />
        </BrowserRouter>
      </div>
    )
  }
}