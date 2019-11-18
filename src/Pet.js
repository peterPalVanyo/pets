import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pet.css";

class Pet extends Component {
  render() {
    let { pet } = this.props;
    return (
        <div className="Pet row justify-content-center mt-5">
          <div className="col-11 col-lg-5 m-5">
            <div className="Pet-card card">
              <img className="card-img-top" src={pet.src} alt={pet.name} />
              <div className="card-body">
                <h2 className="card-title">{pet.name}</h2>
                <h4 className="card-subtitle text-muted">{pet.age} éves</h4>
              </div>
              <ul className="list-group list-group-flush">
                {pet.facts.map((fact, i) => (
                  <li className="list-group-item" key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className="card-body">
                <Link to="/pets" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Pet;
