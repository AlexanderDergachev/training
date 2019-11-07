import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Weather extends Component {
    render() {
        let {city, country, temperature, humidity, description} = this.props
        return (
            <div>
                <Link to="/">home</Link>
                <div>City: {city}</div>
                <div>Country: {country}</div>
                <div>Temperature: {temperature}</div>
                <div>Humidity: {humidity}</div>
                <div>Description: {description}</div>
            </div>
        )
    }
}
