import React, {Component} from 'react';
import Todolist from "./components/Todolist";
import Todoinput from "./components/Todoinput";
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="app-title">React Todos</h1>
                <div className="main">
                    <Todoinput />
                    <Todolist />
                </div>
            </div>      
        );
    }
}

export default App;
