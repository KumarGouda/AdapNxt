import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" className="nav-item" activeClassName="active">
        Dashboard
      </NavLink>
      <NavLink to="/inventory" className="nav-item" activeClassName="active">
        Inventory
      </NavLink>
      <NavLink to="/orders" className="nav-item" activeClassName="active">
        Orders
      </NavLink>
      <NavLink to="/shipping" className="nav-item" activeClassName="active">
        Shipping
      </NavLink>
      <NavLink to="/channel" className="nav-item" activeClassName="active">
        Channel
      </NavLink>
    </nav>
  );
};

export default Navbar;
