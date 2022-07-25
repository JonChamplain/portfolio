import React from "react"
import { ContactItem } from "../components"

export default function Footer() {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="footer w-full mt-12 p-8">
      <div className="container mx-auto relative flex flex-col justify-center items-center p-4 space-y-8 md:space-y-0">
        <div className="footer-top flex flex-col space-y-4 justify-center items-center w-full">
          <div className="legal-text">Jon Russell © {currentYear}</div>
        </div>
        <div className="contact-list-grid md:absolute md:right-0 flex justify-between mt-0 w-40">
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
