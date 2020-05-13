import React, { Component } from 'react';
import axios from "axios";
import "../../style/_addproduct.scss";
import AdminHeader from "./AdminHeader";
import Forbidden from "./Forbidden";
import AdminFooter from './AdminFooter';

class UpdateProduct extends Component {
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
        const id=localStorage.getItem("id")
        if(!this.state.image){
            const res2 = await axios.put("http://localhost:1337/products/" + id, {
            name: e.target.elements.name.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value
            })
            console.log(res2)
            window.location.replace("http://localhost:3000/get")
        }else{
            const data = new FormData();
            data.append("files", this.state.image)
        
            const res = await axios.post("http://localhost:1337/upload", data)
    
            const res2 = await axios.put("http://localhost:1337/products/" + id, {
                name: e.target.elements.name.value,
                description: e.target.elements.description.value,
                price: e.target.elements.price.value,
                image: res.data[0]
            })
            console.log(res2)
            window.location.replace("http://localhost:3000/get")
        }
        
    }
    render() {
        const loggedIn=this.state.token || localStorage.getItem("token")
        return (
            <React.Fragment>
                {!loggedIn 
                ?  <Forbidden/>
                : <React.Fragment>
                    <AdminHeader/>
                    <div className="adminform">
                        <h3>Uppdatera produkten</h3>
                        <form onSubmit={this.onSubmitToApi.bind(this)}>
                            <input type="text" name="name" placeholder="Ange produkt namn" defaultValue={localStorage.getItem("name")}/>
                            <input type="text" name="description" placeholder="Ange produkt desciption" defaultValue={localStorage.getItem("description")}></input>
                            <input type="number" name="price" placeholder="Ange produkt pris" defaultValue={localStorage.getItem("price")}></input>
                            <input type="file" name="files" onChange={this.fileUpload.bind(this)} />
                            <button className={"btn btn-boka"}>Uppdatera</button>
                        </form>
                    </div>
                    <AdminFooter/>
                 </React.Fragment>
                }
            </React.Fragment>
        )
    }

}
 
export default UpdateProduct;