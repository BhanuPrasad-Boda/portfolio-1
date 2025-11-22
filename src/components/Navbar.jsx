// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";  // we will create this file

export default function Navbar({ active }) {
    const pages = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "skills", path: "/skills" },
        { name: "projects", path: "/projects" },
        { name: "education", path: "/education" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <div className="navbar-container">
            {pages
                .filter((p) => p.name !== active)
                .map((p) => (
                    <Link key={p.name} to={p.path}>
                        <button className="nav-btn">
                            {p.name.toUpperCase()}
                        </button>
                    </Link>
                ))}
        </div>
    );
}
