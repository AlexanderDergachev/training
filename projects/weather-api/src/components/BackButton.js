import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BackButton extends Component {
    render() {
        return (
            <React.Fragment>
                <Link className="weather__back" to="/">&#8592; Back</Link>
            </React.Fragment>
        )
    }
}
