import React, { Component } from 'react'
import Product from './Product'
export default class Products extends Component {
    state = {
        products: null,
        isLoading: true
    }
    componentDidMount() {
        let token = localStorage.getItem('token');
        let data = `Bearer ${token}`;
        fetch('http://localhost:8080/product', {
            headers: {
                Authorization: data
            }
        })
            .then(responce => responce.json())
            .then(data => this.setState({ products: data }))
            .catch(error => {
                this.props.history.push('/login');
            })
        this.setState({ isLoading: false })
    }
    render() {
        return (
            <div className="container">
                {
                    this.state.isLoading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                }
                {
                    this.state.products && this.state.products.map(product =>
                        <Product key={product.id} id={product.id} price={product.price} name={product.name} path={product.path}></Product>
                    )
                }
            </div>
        )
    }
}
