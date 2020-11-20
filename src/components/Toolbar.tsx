import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import img from '../manucure-pedicure.jpg'

function NavBar() {
  return (
    <React.Fragment>
      <div className="toolbar" role="banner">
        <img
          width="75px"
          alt="Logo"
          src={img}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <NavLink to="/" activeClassName="App-link" style={{ color: 'white' }}><strong>Accueil</strong></NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/reservation" activeClassName="App-link" style={{ color: 'white' }}><strong>Réservation</strong></NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/reservations" activeClassName="App-link" style={{ color: 'white' }}><strong>Liste des réservations</strong></NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/inscription" activeClassName="App-link" style={{ color: 'white' }}><strong>S'inscrire</strong></NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/inscriptions" activeClassName="App-link" style={{ color: 'white' }}><strong>Liste des inscriptions</strong></NavLink>
            </div>

            <div className="col-md-2">
              <NavLink to="/prestations" activeClassName="App-link" style={{ color: 'white' }}><strong>Préstations</strong></NavLink>
            </div>
          </div>

        </div>
        <div className="spacer"></div>

      </div>
    </React.Fragment>
  );

}
export default NavBar;
