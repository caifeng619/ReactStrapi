import React, { Component } from "react"
import { Link } from "react-router-dom"

class Card extends Component {
    state = {
        product_id: ""
    }
    onClickId=(e) =>{
        // e.preventDefault()
        this.setState({
            product_id:e.target.dataset.id
        })
        console.log(this.state.product_id)
        localStorage.setItem("product_id", JSON.stringify(this.state.product_id))
    }
    render() {
        const { id, name, description, image, price } = this.props
        return (
                <div className={"card"}>
                    <img src={image} className={"card-img-top"} alt={name} />
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{name}</h5>
                        <p className={"card-text"}>{description}</p>
                        <Link to="/tid"><button onClick={this.onClickId} data-id ={id} className={"btn btn-boka"}>Boka</button></Link>
                        <span>{price} kr</span>
                    </div>
                </div>
        )
    }
}
export default Card;