import React, { Component } from 'react'

export default class Todoinput extends Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <input className="main-input" type="text" placeholder="What needs to be done?"/>
                </form>
            </React.Fragment>
        )
    }
}
