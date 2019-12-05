import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './components/Products'
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';

export default class App extends Component {

  componentDidMount() {
    // fetch('http://localhost:8080/product')
    //   .then(responce => responce.json())
    //   .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/product/:id' component={SingleProduct} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}



