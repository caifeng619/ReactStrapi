import React from "react"
import "../style/_step.scss"
import {Link} from "react-router-dom"

const Steg = () => {
    return (
            <div className={"step"}>
                <ul className={"step-links"}>
                    <li className={"first"}><Link to="/" > 1. Behandling</Link></li>
                    <li className={"second"}><Link to="/tid">2. Tid</Link></li>
                    <li className={"third"}><Link to="/form" > 3.Kontaktinfo</Link></li>
                </ul>
            </div>
    )
}

export default Steg;