import React, { Component } from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import "./App.css";
import ragacs from "./images/ragacs.jpg";
import pajti from "./images/pajti.jpg";
import ragacsv from "./images/ragacsv.jpg";

class App extends Component {
  static defaultProps = {
    pets: [
      {
        name: "Ragacs",
        age: 10,
        src: ragacs,
        facts: [
          "Mókusvadásznak tartja magát",
          "Zaklatja a sündisznókat",
          "Ágy alatt szeret aludni"
        ]
      },
      {
        name: "Pajti",
        age: 8,
        src: pajti,
        facts: [
          "Két órát van ébren",
          "Távolból galamb vadász",
          "Mindenre ráfekszik"
        ]
      },
      {
        name: "Ragacs-videki",
        age: 10,
        src: ragacsv,
        facts: [
          "Kiszökik minden kertből",
          "Falusi bandát toboroz",
          "A fűben szeret heverészni"
        ]
      }
      /*       {
        name: "Pajti(vidéki)",
        age: 8,
        src: pajtiv,
        facts: [
          "",
          "",
          ""
        ]
      } */
    ]
  };
  render() {
    return (
      <div>
        <Navbar pets={this.props.pets} />
        <div className="container">
          <Routes pets={this.props.pets} />
        </div>
      </div>
    );
  }
}

export default App;
