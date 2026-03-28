import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        <h1 className="navbar-brand">
            <Link to="/">Re:Act B-log</Link>
        </h1>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">B-logs</Link></li>
            <li><Link to="/new-post" className="btn-nav">New Memory</Link></li>
        </ul>
        </nav>
    );
}

export default Navbar;