import React, { Component } from 'react'
import edit from '../icons/edit.svg'
import remove from '../icons/remove.svg'
export default class Todoitem extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
    }
    state = {
        hover: false,
        checked: false
    }
    itemHoverOff = () => {
        this.setState({hover: false})
    }
    itemHoverOn = () => {
        this.setState({hover: true})
    }
    // toggleCheckbox = () => {
    //     this.setState({checked: !this.state.checked})        
    // }
    render() {
        const {title, handleDelete, handleEdit, toggleChecked} = this.props
        let hoverVisibility;
        let hoverColor;
        if (this.state.hover) {
            hoverVisibility = {visibility: 'visible'};
            hoverColor = {backgroundColor: 'rgb(241, 211, 185)'};
        }
        if (this.state.checked) {
            hoverColor = {color: '#e8e2dc'};
            hoverVisibility = {visibility: 'hidden'};
        }

        
        return (
            <div style={hoverColor} ref={this.itemRef} onMouseEnter={this.itemHoverOn} onMouseLeave={this.itemHoverOff} className="main-item">
                <input onChange={toggleChecked} type="checkbox"/>
                <span>{title}</span>
                <img style={hoverVisibility} className="edit-icon" src={edit} alt={edit} onClick={handleEdit}/>
                <img style={hoverVisibility} className="remove-icon" src={remove} alt={remove} onClick={handleDelete}/>
            </div>
        )
    }
}
