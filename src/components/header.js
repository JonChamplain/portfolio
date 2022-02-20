import React from "react"
import { NavLink } from "../components"

export default function Header({ aboutRef, portfolioRef, contactRef }) {
  return (
    <header className="w-full flex justify-center">
      <nav className="topnav">
        <NavLink text="About" sectionRef={aboutRef} />
        <NavLink text="Portfolio" sectionRef={portfolioRef} />
        <NavLink text="Contact" sectionRef={contactRef} />
      </nav>
    </header>
  )
}
