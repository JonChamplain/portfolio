import React from "react"
import { NavLink, ContactItem } from "../components"

export default function Footer({ aboutRef, portfolioRef, contactRef }) {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="footer w-full mt-12" ref={contactRef}>
      <div className="container mx-auto relative flex flex-col justify-center items-center p-4 space-y-4 md:space-y-0">
        <div className="footer-top flex flex-col space-y-4 justify-center items-center w-full">
          <nav className="footer-nav space-x-12 flex justify-between">
            <NavLink text="About" sectionRef={aboutRef} />
            <NavLink text="Portfolio" sectionRef={portfolioRef} />
            <NavLink text="Contact" sectionRef={contactRef} />
          </nav>
          <div className="legal-text">Jon Russell © {currentYear}</div>
        </div>
        <div className="contact-list-grid md:absolute md:right-0 flex justify-center mt-0">
          <ContactItem
            link="mailto:joninvermont@gmail.com"
            image="/gmail_icon.svg"
            alt="gmail link"
          />

          <ContactItem
            link="https://www.linkedin.com/in/jonathan-russell-76a0ab71/"
            image="/linkedin_icon.svg"
            alt="linkedin link"
          />

          <ContactItem
            link="https://github.com/JonChamplain"
            image="/github_icon.svg"
            alt="github link"
          />
        </div>
      </div>
    </footer>
  )
}
