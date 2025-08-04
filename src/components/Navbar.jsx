import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

/**
 * The Navbar component provides top‑level navigation to all pages in the
 * application. It uses NavLink from react‑router‑dom to highlight the
 * currently active route. A simple responsive design is applied to stack
 * navigation items on small screens.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img 
          src={import.meta.env.PROD ? "/umamusume_sound/images/umamusume_app.webp" : "/images/umamusume_app.webp"} 
          alt="Umamusume Character" 
          onError={(e) => {
            // Si no se encuentra la imagen, usar emoji como fallback
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'inline';
          }}
        />
        <span className="navbar__logo-fallback" style={{display: 'none'}}>🏇</span>
      </Link>
      <ul className="navbar__links">
        <li>
          <NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active' : '')}>
            Álbumes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms" className={({ isActive }) => (isActive ? 'active' : '')}>
            Términos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
