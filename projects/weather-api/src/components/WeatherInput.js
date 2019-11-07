import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class WeatherInput extends Component {
    state = {
        city: undefined,
    }
    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.getWeather(this.state.city);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='city' onChange={this.handleCityChange} type="text" />
                    <button>get weather</button>
                    <Link to="/:hui">link to hui</Link>
                </form>
            </div>
        )
    }
}
