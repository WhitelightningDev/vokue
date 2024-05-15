import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
