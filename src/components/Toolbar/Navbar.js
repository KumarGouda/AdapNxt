// Navbar.js
import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Canceled from "./Canceled";
import AWSCreated from "./AWSCreated";
import Pending from "./Pending";
import Ship from "./Ship";
import Completed from "./Completed";
import Accepted from "./Accepted";
import Shipped from "./Shipped";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {" "}
      {/* Add a container div */}
      <nav className="navigation-bar1">
        <NavLink to="/pending" className="nav-item" activeClassName="active">
          Pending
        </NavLink>
        <NavLink to="/accepted" className="nav-item" activeClassName="active">
          Accepted
        </NavLink>
        <NavLink
          to="/aws-created"
          className="nav-item"
          activeClassName="active"
        >
          AWS Created
        </NavLink>
        <NavLink to="/ship" className="nav-item" activeClassName="active">
          Ready to Ship
        </NavLink>
        <NavLink to="/shipped" className="nav-item" activeClassName="active">
          Shipped
        </NavLink>
        <NavLink to="/completed" className="nav-item" activeClassName="active">
          Completed
        </NavLink>
        <NavLink to="/canceled" className="nav-item" activeClassName="active">
          Canceled
        </NavLink>
      </nav>
      <Routes>
        <Route path="/canceled" element={<Canceled />} />
        <Route path="/aws-created" element={<AWSCreated />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/ship" element={<Ship />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/shipped" element={<Shipped />} />
        <Route path="/accepted" element={<Accepted />} />
      </Routes>
    </div>
  );
};

export default Navbar;
