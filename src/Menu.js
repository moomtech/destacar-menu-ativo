import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <header>
        <nav>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>

          <NavLink to="/dashboard" activeClassName="selected">
            Dashboard
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Menu;
