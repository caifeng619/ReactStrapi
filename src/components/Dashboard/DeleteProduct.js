import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../style/_deleteproduct.scss";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import Forbidden from "./Forbidden";

class DeleteProduct extends Component {
    state={
        token:null
    }
  deleteEvent() {
    const id = localStorage.getItem("id");
    axios.delete("http://localhost:1337/products/" + id).then((res) => {
      console.log(res);
    });
    window.location.replace("http://localhost:3000/get");
  }
  render() {
    const loggedIn=this.state.token || localStorage.getItem("token")
    return (
      <React.Fragment>
          {!loggedIn 
            ?   <Forbidden/>
            :   <React.Fragment>
                    <AdminHeader />
                    <div className="delete-form-container">
                        <div className="delete-form">
                            <p>Är du säker att du vill ta bort den här produkten?</p>
                            <button onClick={this.deleteEvent.bind(this)}>Ja</button>
                            <Link to="/get">
                            <button>Gå tillbaka</button>
                            </Link>
                        </div>
                    </div>
                    <AdminFooter/>
                </React.Fragment>}
        </React.Fragment>
    );
  }
}

export default DeleteProduct;
