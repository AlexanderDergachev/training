import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './components/Products'
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Registration from './components/Registration';
import Login from './components/Login';
import CreateOrder from './components/CreateOrder';

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
            <Route path='/cart' component={Cart} />
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/create-order' component={CreateOrder} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}



