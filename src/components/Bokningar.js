import React, { Component } from "react";
import "../style/_bokningar.scss";
import BokCard from "./BokCard";
import Header from "./Header";
import Footer from "./Footer";

class Bokningar extends Component {
  // state = {
  //     bokningar: []
  // }
  // componentDidMount() {
  //     let data = JSON.parse(localStorage.getItem("state"));
  //     this.setState({
  //         bokningar:data
  //     })
  // }
  // componentDidUpdate() {
  //     console.log("The component just updated")
  // }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={"bokningar-container"}>
          <BokCard datum={"2020/05/10"} tid={"10:00"} />
          <BokCard datum={"2020/05/15"} tid={"13:00"} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Bokningar;
