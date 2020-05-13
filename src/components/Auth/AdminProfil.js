// admin profile
import React, { Component } from "react";
import AdminHeader from "../Dashboard/AdminHeader";
import AdminFooter from "../Dashboard/AdminFooter";
import { FaFile } from "react-icons/fa";
import "../../style/_adminprofil.scss";
import {Link} from "react-router-dom"
import axios from "axios"

class AdminProfil extends Component {
  state={
    numOfProducts:0
  }
  componentDidMount(){
    axios.get("http://localhost:1337/products/count").then(
      res=>{
        this.setState({
          numOfProducts:res.data
        })
      }
    )
  }
  render() {
    return (
      <div className="dash-board">
        <AdminHeader username={this.props.username} />
        <h2>Dashboard</h2>
        <div className="produkter-dash">
            <div>
                <h3>{this.state.numOfProducts}</h3>
                <h4>Produkter</h4>
            </div>
            <FaFile />
        </div>
        <div className="merinfo"><Link to="/get">Mer info >></Link></div>
        <AdminFooter/>
      </div>
    );
  }
}

export default AdminProfil;
