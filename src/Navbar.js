import React, { Component } from "react";
import {NavLink, Link} from 'react-router-dom'
//if the NavLink doesnot work: npm i path-to-regexp@1.7.0 -S

class Nabvar extends Component {
  render() {
      const petLinks = this.props.pets.map(pet => (
          <li className='nav-item' key={pet.name}>
          <NavLink exact to={`/pets/${pet.name}`} className='nav-link'>
            {pet.name}
          </NavLink>
          </li>
      ))
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <Link className='navbar-brand' to='/pets'>
            Petapp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        ><span className='navbar-toggler-icon'/></button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                <li className='nav-item'><NavLink exact to='/pets' className='nav-link' >Menu</NavLink></li>
                {petLinks}
            </ul>
        </div>
      </nav>
    );
  }
}

export default Nabvar;
