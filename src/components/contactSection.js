import React from "react"
import { ContactLink } from "."

export default function ContactSection({ contactRef }) {
  return (
    <section className="" ref={contactRef}>
      <div className="flex flex-col items-center mb-32 lg:mb-48">
        <h2 className="font-handwriting">Contact Me</h2>
        <h3 className="subtitle">have a website that needs work?</h3>
        <div className="flex flex-col space-y-8 md:space-y-12 mt-16 lg:mt-24">
          <ContactLink
            text="Email"
            link="mailto:joninvermont@gmail.com"
            linkText="joninvermont@gmail.com"
          />
          <ContactLink
            text="LinkedIn"
            link="https://www.linkedin.com/in/jonathan-russell-76a0ab71/"
            linkText="linkedin.com/in/jonathan-russell-76a0ab71"
          />
          <ContactLink
            text="GitHub"
            link="https://github.com/JonChamplain"
            linkText="github.com/JonChamplain"
          />
        </div>
      </div>
    </section>
  )
}
