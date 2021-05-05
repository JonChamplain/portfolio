import React from "react";
import { Link } from "gatsby";

export default function Navbar(props) {
   return (
      <div className="topnav">
         <Link className="header-text" to="/">
         About
         </Link>
         <Link className="header-text" to="/work">
         Work
         </Link>
         <Link className="header-text" to="/contact">
         Contact
         </Link>
      </div>
   );
}
