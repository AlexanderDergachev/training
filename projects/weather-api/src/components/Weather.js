import React, { Component } from 'react';
import BackButton from './BackButton';
import ClearSky from '../icons/ClearSky.png'
import OvercastClouds from '../icons/OvercastClouds.png'
// import ScatteredClouds from '../icons/ScatteredClouds.png'
// import BrokenClouds from '../icons/BrokenClouds.png'
import ShowerRain from '../icons/ShowerRain.png'
import Rain from '../icons/Rain.png'
import Thunderstorm from '../icons/Thunderstorm.png'
import Snow from '../icons/Snow.png'
import Mist from '../icons/Mist.png'


export default class Weather extends Component {
    render() {

        let { city, country, temperature, humidity, description, main } = this.props
        let icon;
        switch (main) {
            case 'Clear':
                icon = ClearSky;
                break;
            case 'Clouds':
                icon = OvercastClouds;
                break;
            case 'Rain':
                icon = Rain;
                break;
            case 'Drizzle':
                icon = ShowerRain;
                break;
            case 'Thunderstorm':
                icon = Thunderstorm;
                break;
            case 'Snow':
                icon = Snow;
                break;
            case 'Mist':
                icon = Mist;
                break;
            case 'Fog':
                icon = Mist;
                break;
            case 'Smoke':
                icon = Mist;
                break;
            case 'Haze':
                icon = Mist;
                break;
            case 'Tornado':
                icon = Mist;
                break;
            default:
                icon = undefined;
        }
        return (
            <div className="weather">
                {
                    city && country && <h2 className="weather__city">{city}, {country}</h2>
                }

                {
                    icon && <img className="weather__icon" alt="icon" src={icon} />
                }
                <div className="weather__info_block">
                    {
                        description && <span className="weather__info weather__description">{description}</span>
                    }

                    {
                        temperature && <span className="weather__info weather__temperature">Temperature: {temperature}&deg; C</span>
                    }

                    {
                        humidity && <span className="weather__info weather__humidity">Humidity: {humidity}%</span>
                    }
                </div>
                <BackButton />
            </div>
        )
    }
}
