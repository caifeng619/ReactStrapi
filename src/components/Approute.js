import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import KontaktForm from "./KontaktForm";
import Bokningar from "./Bokningar";
import Notfoundpage from "./Notfoundpage";
import ChooseTime from "./ChooseTime";
import AdminSida from "./Auth/AdminSida";
import Logout from "./Auth/Logout";
import AdminProfil from "./Auth/AdminProfil";
import AddProduct from "./Dashboard/AddProduct";
import GetProducts from "./Dashboard/GetProducts";
import UpdateProduct from "./Dashboard/UpdateProduct";
import DeleteProduct from  "./Dashboard/DeleteProduct";


class Approute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact></Route>
                    <Route path="/tid" component={ChooseTime} exact></Route>
                    <Route path="/form" component={KontaktForm} exact></Route>
                    <Route path="/bokningar" component={Bokningar} exact></Route>
                    <Route path="/adminsida" exact component={AdminSida}></Route>
                    <Route path="/add" component={AddProduct} exact></Route>
                    <Route path="/profil" component={AdminProfil} exact></Route>
                    <Route path="/get" component={GetProducts} exact></Route>
                    <Route path="/update" component={UpdateProduct} exact></Route>
                    <Route path="/delete" component={DeleteProduct} exact></Route>
                    <Route path="/logout" component={Logout} exact></Route>
                    <Route component={Notfoundpage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Approute;