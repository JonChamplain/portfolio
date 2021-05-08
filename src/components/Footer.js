import React from 'react'
import { Link } from "gatsby";

export default function Footer() {
    let date = new Date()
    let currentYear = date.getFullYear()
    return (
      <div className="footer">
        <nav className="footer-nav">
          <Link className="header-text" to="/">
            About
          </Link>
          <Link className="header-text" to="/work">
            Work
          </Link>
          <Link className="header-text" to="/contact">
            Contact
          </Link>
        </nav>
        Jonathan Russell © {currentYear}
      </div>
    );
}