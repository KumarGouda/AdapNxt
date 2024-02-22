// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Channel from "./components/Channel";
import Orders from "./components/Orders";
import Shopping from "./components/Shopping";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Toolbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <nav className="navigation-bar">
          <NavLink to="/dashbord" className="nav-item" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav-item"
            activeClassName="active"
          >
            Inventory
          </NavLink>
          <NavLink to="/channel" className="nav-item" activeClassName="active">
            Channel
          </NavLink>
          <NavLink to="/orders" className="nav-item" activeClassName="active">
            Orders
          </NavLink>
          <NavLink to="/shopping" className="nav-item" activeClassName="active">
            Shopping
          </NavLink>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
