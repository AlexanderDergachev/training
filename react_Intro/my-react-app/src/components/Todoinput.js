import React, { Component } from 'react'
import logo from '../icons/add.svg'

export default class Todoinput extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.myRef.current.focus();
    }
    render() {
        const { title, handleChange, handleSubmit } = this.props;

        return (
            <React.Fragment>
                <form onSubmit={handleSubmit} >
                    <input ref={this.myRef} name="test" className="main-input" type="text"
                        placeholder="What needs to be done?" value={title} onChange={handleChange} />
                    <button className="add-icon"><img src={logo} alt={logo} /></button>
                </form>
            </React.Fragment>
        )
    }
}
