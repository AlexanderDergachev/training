import React, { Component } from 'react'

export default class CreateOrder extends Component {
    state = {
        cart: null,
        totalPrice: null
    }
    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const totalPrice = JSON.parse(localStorage.getItem("totalPrice"))
        this.setState({
            cart: cart,
            totalPrice: totalPrice
        })
    }
    sendData = () => {
        const user_data = localStorage.getItem('user_data');
        console.log(user_data);
        
        const user_id = JSON.parse(user_data).id;
        console.log(user_id);
        
        fetch('http://localhost:8080/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: {
                    street: "yangelya",
                    number: 3,
                    district: "KPI CITY",
                    city: 'Kyiv',
                    country: 'Ukraine'
                },
                user_id: user_id,
                cart: this.state.cart,
                totalPrice: this.state.totalPrice
            })
        });
    }
    render() {
        if (this.state.cart && this.state.totalPrice) {
            console.log(this.state.cart);
            console.log(this.state.totalPrice);
        }
        return (
            <div>
                {
                    this.state.cart && (
                        <React.Fragment>
                            <h1>уауа</h1>
                            <button onClick={this.sendData}>Do some</button>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}
