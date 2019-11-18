import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PetList.css";

class PetList extends Component {
  render() {
    return (
      <div className="PetList">
        <h1 className="display-1 text-center">Pet List</h1>
        <div className="row">
          {this.props.pets.map(p => (
            <div className="Pet col-lg-4 text-center" key={p.name}>
              <img src={p.src} alt={p.name} />
              <h3>
                <Link to={`/pets/${p.name}`}>{p.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PetList;
