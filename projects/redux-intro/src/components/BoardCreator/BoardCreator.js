import React, { Component } from 'react'
import './BoardCreator.css'
export default class BoardCreator extends Component {
    state = {
        isOpen: false,
    }

    inputRef = React.createRef();

    handleBoardCreator = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));

    }
    createBoard = () => {
        const { createBoard } = this.props;
        createBoard();
        this.inputRef.current.focus();
    }
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.createBoard();
        }
    }
    render() {
        const { isOpen } = this.state;
        const { onChangeCreateBoardInput, newBoardName} = this.props
        let boardCreator;
        if (isOpen) {
            boardCreator = (
                <div className="board-creator board-creator__opened">
                    <div className="board-creator__title-container">
                        <h3 className="board-creator__title">Creating a board</h3>
                        <span onClick={this.handleBoardCreator}>&#8855;</span>
                    </div>
                    <h4 className="board-creator__subtitle">How we can call your board?</h4>
                    <input value={newBoardName} onKeyPress={this.handleKeyPress} ref={this.inputRef} onChange={onChangeCreateBoardInput} className="board-creator__input" type="text" />
                    <div className="board-creator__button-container">
                        <button onClick={this.handleBoardCreator} className="board-creator__close">cansel</button>
                        <button onClick={this.createBoard} className="board-creator__create">create</button>
                    </div>
                </div>
            );
        } else {
            boardCreator = (
                <div onClick={this.handleBoardCreator} className="board-creator board-creator__closed">
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
