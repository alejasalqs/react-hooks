import React from "react";
import { NavLink } from "react-router-dom";
// La diferencia entre Link y NavLink es que con NavLink nos permite saber en cual ruta estamos para
// activar un clase de css, en el menú se ve el ejemplo usando el atributo activeClassName
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="usecontext/">
          useContext Hook
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="usecontext/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="usecontext/about"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="usecontext/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
