import React, { Component } from "react";
import PetList from "./PetList";
import Pet from "./Pet";
import { Route, Switch } from "react-router-dom";
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
    const getPet = props => {
      let name = props.match.params.name;
      let targetPet = this.props.pets.find(
        pet => pet.name.toLowerCase() === name.toLowerCase()
      );
      return <Pet {...props} pet={targetPet} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/pets"
          render={() => <PetList pets={this.props.pets} />}
        />
        <Route exact path="/pets/:name" render={getPet} />
      </Switch>
    );
  }
}

export default App;
