import React, { Component } from 'react'

export default class SingleProduct extends Component {
    state = {
        product: null
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:8080/product/${id}`)
            .then(responce => responce.json())
            .then(data => this.setState({ product: data }))

        console.log(this.state.product);
        
    }
    render() {
        console.log(this.state.product);
        
        return (
            <div className="single">

            </div>
        )
    }
}
