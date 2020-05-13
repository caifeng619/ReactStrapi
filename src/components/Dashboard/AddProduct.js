import React, { Component } from "react";
import axios from "axios";
import "../../style/_addproduct.scss";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import Forbidden from "./Forbidden";

class AddProduct extends Component {
    state = {
        image: "",
        token:null
    }

    fileUpload(e) {
        console.log(e.target.files[0])
        this.setState({
            image: e.target.files[0]
        })
    }
    async onSubmitToApi(e) {
        e.preventDefault();
        e.persist();
        const data = new FormData();
        data.append("files", this.state.image)
    
        const res = await axios.post("http://localhost:1337/upload", data)
        console.log(res.data)

        const res2 = await axios.post("http://localhost:1337/products", {
            name: e.target.elements.name.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            image: res.data[0]
        })
        console.log(res2)
        window.location.replace("http://localhost:3000/get")
    }
    render() {
        const loggedIn=this.state.token || localStorage.getItem("token")
        return (
            <React.Fragment>
                {!loggedIn 
                ? <Forbidden/>
                : <div className="page-container">
                    <AdminHeader/>
                    <div className="adminform">
                        <h3>Lägg till en ny produkt</h3>
                        <form onSubmit={this.onSubmitToApi.bind(this)}>
                            <input type="text" name="name" placeholder="Ange produkt namn" />
                            <input type="text" name="description" placeholder="Ange produkt desciption"></input>
                            <input type="number" name="price" placeholder="Ange produkt pris"></input>
                            <input type="file" name="files" onChange={this.fileUpload.bind(this)} />
                            <button className={"btn btn-boka"}>Spara</button>
                        </form>
                    </div>
                    <AdminFooter/>
                 </div>
                }
                 
            </React.Fragment>
        )
    }

}

export default AddProduct;