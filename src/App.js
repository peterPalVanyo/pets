import React, {Component} from "react";
import PetList from './PetList'
import {Route, Switch} from 'react-router-dom'
import "./App.css";
import ragacs from './images/ragacs.jpg'
import pajti from './images/pajti.jpg'
import ragacsv from './images/ragacsv.jpg'

class App extends Component  {
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
        name: "Ragacs(vidéki)",
        age: 10,
        src: ragacsv,
        facts: [
          "Kiszökik minden kertből",
          "Falusi bandát toboroz",
          "A fűben szeret heverészni"
        ]
      },
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
  }
  render() {
    console.log(this.props.pets)
    return (
      <Route path='/pets' render={() => <PetList pets={this.props.pets} />} />

    )
  }
}

export default App;
