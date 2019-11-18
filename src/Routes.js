import React, { Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import PetList from "./PetList";
import Pet from "./Pet";

class Routes extends Component {
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
          <Redirect to='/pets' />
        </Switch>
    );
  }
}

export default Routes;
