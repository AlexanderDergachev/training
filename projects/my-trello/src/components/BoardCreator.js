import React, { Component } from 'react'

export default class BoardCreator extends Component {
    state = {
        isOpen: false,
        value: ''
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    openBoardCreator = () => {
        this.setState({ isOpen: true });
    }
    closeBoardCreator = () => {
        this.setState({ isOpen: false });
    }
    render() {
        const isOpen = this.state.isOpen;
        let boardCreator;
        if (isOpen) {
            boardCreator = (
                <div className="board-creator board-creator__opened">
                    <div className="board__title_container">
                        <h3 className=".board-creator__title">Creating a board</h3>
                        <span onClick={this.closeBoardCreator}>&#8855;</span>
                    </div>
                    <h4 className="board-creator__subtitle">How we can call your board?</h4>
                    <input onChange={this.handleChange} className="board-creator__input" type="text" />
                    <div className="board-creator__button-container">
                        <button onClick={this.closeBoardCreator} className="board-creator__close">cansel</button>
                        <button onClick={() => {this.props.createTable(this.state.value)}} className="board-creator__create">create</button>
                    </div>

                </div>
            );
        } else {
            boardCreator = (
                <div onClick={this.openBoardCreator} className="board-creator board-creator__closed">
                    <h3 className="board-creator__title">New board</h3>
                </div>);
        }
        return (
            <React.Fragment>
                {boardCreator}
            </React.Fragment>
        )
    }
}
