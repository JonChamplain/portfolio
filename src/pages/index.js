import React, { useRef } from "react"
import {
  Header,
  AboutSection,
  ContactSection,
  PortfolioSection,
  Footer,
} from "../components"

export default function Home() {
  const aboutRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()

  return (
    <>
      <Header
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <main>
        <AboutSection aboutRef={aboutRef} />
        <PortfolioSection portfolioRef={portfolioRef} />
        <ContactSection contactRef={contactRef} />
      </main>
      <Footer />
    </>
  )
}
