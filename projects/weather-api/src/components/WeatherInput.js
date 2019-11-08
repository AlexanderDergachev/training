import React, { Component } from 'react'
import Error from './Error';

export default class WeatherInput extends Component {
    state = {
        city: undefined,
        hover: false
    }
    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getWeather(this.state.city);
    }
    HoverOff = () => {
        this.setState({ hover: false })
    }
    HoverOn = () => {
        this.setState({ hover: true })
    }
    render() {
        let main__button_style;
        if (this.state.hover) {
            main__button_style = {
                backgroundColor: '#fff',
                color: "rgb(97, 48, 100)"
            };
        }
        return (
            <React.Fragment>
                <h1 className="main__title">React weather API</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="City..." className="main__input" name='city' autoComplete="off" onChange={this.handleCityChange} type="text" />
                    <button onMouseEnter={this.HoverOn}
                        onMouseLeave={this.HoverOff}
                        style={main__button_style}
                        className="main__button">
                        get weather &#8594;
                    </button>
                    {
                        this.props.error && <Error />
                    }
                </form>
            </React.Fragment>
        )
    }
}
