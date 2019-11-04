import React, { Component } from 'react';
import Todoitem from './Todoitem';

export default class Todolist extends Component {
    render() {
        const {items, handleDelete, handleEdit} = this.props;
        
        return (
            <div className="main-list">
                {items.map(item =>{
                    return <Todoitem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} 
                                    handleEdit={() => handleEdit(item.id)}
                            />      
                })}
            </div>
        )
    }
}
