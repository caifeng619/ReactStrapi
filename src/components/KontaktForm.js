import React from "react";
import "../style/_kontaktform.scss";
import { Link } from "react-router-dom";
import Step from "./Step";
import Header from "./Header";
import Footer from "./Footer";

class KontaktForm extends React.Component {
    state = {
        name: "",
        appointmentTime: "",
        telefon: ""
    }

    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleOnChangeTime = (e) => {
        this.setState({
            appointmentTime: e.target.value
        })
    }
    handleOnChangeTel = (e) => {
        this.setState({
            telefon: e.target.value
        })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        localStorage.setItem("state", JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <Header/>
                <Step />
                <div className={"form-container"}>
                    <form onSubmit={this.handleOnSubmit}>
                        <h3>Fyll forulär för att boka en tid!</h3>
                        <input type={"text"} name={"name"} onChange={this.handleOnChangeName} placeholder={"ange ditt name"}></input><br />
                        <input type={"text"} name={"appointmentTime"} onChange={this.handleOnChangeTime} placeholder={"ange önskat datum"}></input><br />
                        <input type={"number"} name={"telefon"} onChange={this.handleOnChangeTel} placeholder={"ange telefon nummer"}></input><br />
                        <button type={"submit"} className={"btn btn-boka"}><Link to="/bokningar">Boka</Link></button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default KontaktForm;