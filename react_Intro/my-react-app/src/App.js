import React, {Component} from 'react';
import Todolist from "./components/Todolist";
import Todoinput from "./components/Todoinput";
import uuid from "uuid";
class App extends Component {
    state = {
        items: [],
        id: uuid(),
        title: '',
        editItem: false,
        editedItemIndex: 0,
        chekedItemsCount: 0,
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    componentDidMount() {
        if (localStorage.getItem('data')){
            let data = JSON.parse(localStorage.getItem('data'));
            this.setState({
                items: data
            })            
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.title 
        }
        let updatedItems = [];
        if (this.state.editItem) {
            let firstArrayPart = this.state.items.slice(0, this.state.editedItemIndex);
            let secondArrayPart = this.state.items.slice(this.state.editedItemIndex);
            updatedItems = firstArrayPart.concat([newItem], secondArrayPart);
        } else {
            updatedItems = [...this.state.items, newItem];
        }
        
        
        this.setState({
            items: updatedItems,
            title: '',
            id: uuid(),
            editItem: false
        });
        localStorage.setItem('data', JSON.stringify(updatedItems));
        

    }
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
        localStorage.setItem('data', JSON.stringify(filteredItems));
        
    }
    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        
        this.setState({
            items: filteredItems,
            title: selectedItem.title,
            editedItemIndex: this.state.items.indexOf(selectedItem),
            editItem: true
        });   
    }
    showCheked = () => {
        console.log(this.state.items);
        
        for (let elem of this.state.items) {
            console.log(elem.cheked);
        }
    }
    render() {
        return (
            <div className="wrapper">
                <h1 className="app-title">React Todos</h1>
                <div className="main">
                    <Todoinput title={this.state.title} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <Todolist items={this.state.items} handleDelete={this.handleDelete}  handleEdit={this.handleEdit} />
                    {/* <button onClick={this.showCheked}>clear</button> */}
                </div>
            </div>      
        );
    }
}

export default App;
