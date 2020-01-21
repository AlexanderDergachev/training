import React, { Component } from 'react'
import './Creator.css'
export default class Creator extends Component {
    state = {
        isOpen: false,
    }

    inputRef = React.createRef();

    handleCreator = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));

    }
    handleSubmit = () => {
        const { onSubmit } = this.props;
        onSubmit();
        this.inputRef.current.focus();
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }
    render() {
        const { isOpen } = this.state;
        const { onChangeInput, inputValue, title, subtitle, mainTitle } = this.props
        let creator;
        if (isOpen) {
            creator = (
                <div className="creator creator__opened">
                    <div className="creator__title-container">
                        <h3 className="creator__title">{title}</h3>
                        <span onClick={this.handleCreator}>&#8855;</span>
                    </div>
                    <h4 className="creator__subtitle">{subtitle}</h4>
                    <input
                        value={inputValue}
                        onKeyPress={this.handleKeyPress}
                        ref={this.inputRef}
                        onChange={onChangeInput}
                        className="creator__input"
                        type="text"
                    />
                    <div className="creator__button-container">
                        <button onClick={this.handleCreator} className="creator__close">cansel</button>
                        <button onClick={this.handleSubmit} className="creator__create">create</button>
                    </div>
                </div>
            );
        } else {
            creator = (
                <div onClick={this.handleCreator} className="creator creator__closed">
                    <h3 className="creator__title">{mainTitle}</h3>
                </div>);
        }
        return (
            <React.Fragment>
                {creator}
            </React.Fragment>
        )
    }
}
