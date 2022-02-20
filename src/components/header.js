import React from "react"
import { NavLink } from "../components"

export default function Header({ aboutRef, portfolioRef, contactRef }) {
  return (
    <header className="topnav">
      <NavLink text="About" sectionRef={aboutRef} />
      <NavLink text="Portfolio" sectionRef={portfolioRef} />
      <NavLink text="Contact" sectionRef={contactRef} />
    </header>
  )
}
