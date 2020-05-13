import React from "react"
import { Link } from "react-router-dom"

const BokCard = ({datum, tid}) => {

    return (
        <div className={"card"} style={{ width: "18rem" }}>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Alex Adamsson</h5>
                <h5 className={"card-title"}>Undersökning</h5>
                <p className={"card-text"}>{datum} {tid}</p>
                <p className={"card-text"}>0708345678</p>
                <button className={"btn btn-boka"}><Link to="/form">Boka om</Link></button><br />
                <button className={"btn btn-boka"}><Link to="/form">Avboka</Link></button>
            </div>
        </div>
    )
}
export default BokCard;