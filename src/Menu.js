import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <header>
        <nav>
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>

          <NavLink activeClassName="selected" to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Menu;
