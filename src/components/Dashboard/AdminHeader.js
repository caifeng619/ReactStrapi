import React from "react"
import { Link } from "react-router-dom"
import { FaPlusCircle, FaWarehouse, FaUserAlt, FaBars } from "react-icons/fa"
import "../../style/_header.scss"

class AdminHeader extends React.Component {
    state={
        menu:false
    }
    hamMenu(){
        this.setState(prevState=>({
            menu:!prevState.menu
        }))
    }
    render() {
        return (
            <nav className="navbar">
                <Link to="/"><img src={require('../../images/logo.png')} alt={"logo"} /></Link>
                <ul className={this.state.menu ? "nav-links open" : "nav-links"}>
                    <li><Link to="/profil">Välkommen {localStorage.getItem("username")} !</Link></li>
                    <li><Link to="/add"><FaPlusCircle/> Ny produkt</Link></li>
                    <li><Link to="/get"><FaWarehouse/> Produkter</Link></li>
                    <li><Link to="/logout"><FaUserAlt /> Log out</Link></li>
                </ul>
                <div id="hamburger" onClick={this.hamMenu.bind(this)}><FaBars /></div>
            </nav>
        )
    }
}
export default AdminHeader;