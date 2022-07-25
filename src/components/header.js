import React, { useEffect, useState } from "react"
import { NavLink } from "../components"

export default function Header({ aboutRef, portfolioRef, contactRef }) {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false)
        } else {
          // if scroll up show the navbar
          setShow(true)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`w-full fixed flex justify-center ${
        show ? "stickyHeader" : ""
      }`}
    >
      <nav className="topnav">
        <NavLink text="About" sectionRef={aboutRef} />
        <NavLink text="Portfolio" sectionRef={portfolioRef} />
        <NavLink text="Contact" sectionRef={contactRef} />
      </nav>
    </header>
  )
}
