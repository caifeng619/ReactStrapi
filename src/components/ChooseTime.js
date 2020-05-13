import React, { Component } from "react";
import Step from "./Step";
import Header from "./Header";
import Footer from "./Footer";
import "../style/_choosetime.scss";
import {Link} from "react-router-dom"

class ChooseTime extends Component {
    state={
        datum:"",
        time:""
    }

    onSubmitToForm(e){
        e.preventDefalut();
        this.setState({
            datum:e.target.elements.datum.value,
            time:e.target.elements.tid.value
        })
        localStorage.setItem("tid", this.state)
    }
    render(){
        return (
            <div>
                <Header/>
                <Step />
                <div className="choosetime-container">
                    <form onSubmit={this.onSubmitToForm.bind(this)}>
                        <h3>Välj datum och en tid!</h3>  
                        <p>Du kan ändra eller avboka din tid utan kostnad online.</p>
                        <label>Datum</label>
                        <input type="date" id="datum" name="datum" value="2020-04-30"/><br/>
                        <label>Tid</label>
                        <input type="text" id="tid" name="tid"></input>
                        <Link to="/form"><button className="btn btn-boka">Gå vidare</button></Link>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ChooseTime;