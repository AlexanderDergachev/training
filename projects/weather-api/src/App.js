import React, { Component } from 'react';
import WeatherInput from './components/WeatherInput'
import Weather from './components/Weather'
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { browserHistory} from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const API_KEY = '15845acd4a29de499a73108e1e7d77eb';
export default class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    redirect: false
  }
  // componentDidMount() {
  //   console.log('updated');

  //   this.setState({
  //     redirect: false
  //   });
  // }
  getWeather = async (city) => {
    if (city) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_call.json();
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        redirect: true
      });
    }
    this.setState({
      redirect: false
    });
  }
  render() {
    if (this.state.redirect) {
      return (
        <BrowserRouter>
          {/* <Switch> */}
          <Route exact path="/" render={() => <WeatherInput getWeather={this.getWeather} />} />
          <Route exact path="/:city" component={Weather} />
          {<Redirect path="/" to={`/:${this.state.city}`} />}

          {/* <Redirect path="/" to="/:hui" /> */}
          {/* </Switch> */}
        </BrowserRouter>
      )
    }
    return (
      <BrowserRouter >
        <Route exact path="/" render={() => <WeatherInput getWeather={this.getWeather} />} />
        <Route exact path="/:city" component={() => <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
        />} />
        {/* <Redirect path="/" to="/:hui" /> */}
      </BrowserRouter>
    )
  }
}


