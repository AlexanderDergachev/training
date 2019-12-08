import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class SingleProduct extends Component {
    state = {
        product: null
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:8080/product/${id}`)
            .then(responce => responce.json())
            .then(data => this.setState({ product: data }))
    }
    addProduct = () => {
        console.log('hui');
        
    }
    render() {
        console.log(this.state.product);

        return (
            <div className="single">
                {
                    this.state.product && (
                        <React.Fragment>
                            <div className="single__img-container">
                                <img src={`/images/${this.state.product[0].path}`} className="single__img" alt={this.state.product[0].name} />
                            </div>
                            <div className="single__info-container">
                                <h2 className="single__name">{this.state.product[0].name}  {this.state.product[0].model_name}</h2>
                                {
                                    this.state.product[0].availability ? <h2>available</h2> : <h2>not available</h2>
                                }
                                <h2 className="single__price">{this.state.product[0].price} &#8372;</h2>
                                <button onClick={this.addProduct} className="m_button single__buy">Add to cart</button>
                                <Link className="single__back m__back" to="/">Back</Link>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}
