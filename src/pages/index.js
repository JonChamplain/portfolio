import React, { useRef } from "react"
import Head from "next/head"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function Home() {
  const date = new Date()
  const currentYear = date.getFullYear()

  const aboutRef = useRef()
  const workRef = useRef()
  const contactRef = useRef()

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="App">
        <Head>
          <html lang="en" />
          <title>Jon Russell - A Web Developer</title>
          <meta
            name="description"
            content="I'm a web developer based in Burlington, Vermont"
          />
        </Head>
        <div className="content flex flex-col items-center ">
          <div className="topnav">
            <span className="nav-link" onClick={() => scrollTo(aboutRef)}>
              About
            </span>
            <span className="nav-link" onClick={() => scrollTo(workRef)}>
              Work
            </span>
            <span className="nav-link" onClick={() => scrollTo(contactRef)}>
              Contact
            </span>
          </div>
          <main>
            <div className="foreground container mx-auto px-8 pt-8">
              <div className="top-container" ref={aboutRef}>
                <h1>I'm Jon.</h1>
                <p className="subtitle">a web developer</p>
                <img src={"/jon-character-circle.png"} alt="profile" />
              </div>
              <div className="text-block">
                <h2>I'm a web developer based in Burlington, Vermont.</h2>
                <br></br>
                <p>
                  I'm passionate about building beautiful and functional
                  technology.
                </p>
              </div>
              <div className="top-container" ref={workRef}>
                <p className="subtitle">here's some stuff I've done</p>
              </div>
            </div>
            <a
              className="portfolio-list-link"
              href="https://sleepy-anchorage-59081.herokuapp.com/"
            >
              <img
                className="portfolio-list-image"
                src="/mockblog_thumbnail.jpg"
                alt="mock blog project link"
              />
              Mock Blog
            </a>
            <a
              className="portfolio-list-link"
              href="https://secure-fjord-65417.herokuapp.com/"
            >
              <img
                className="portfolio-list-image"
                src="/yelpington_thumbnail.jpg"
                alt="yelpington project link"
              />
              Yelpington
            </a>
            <a
              className="portfolio-list-link"
              href="https://stark-plateau-02827.herokuapp.com/"
            >
              <img
                className="portfolio-list-image"
                src="/triptactoe_thumbnail.jpg"
                alt="trip-tac-toe game link"
              />
              Trip-Tac-Toe
            </a>
            <a
              className="portfolio-list-link"
              href="https://github.com/JonChamplain?tab=repositories"
            >
              <img
                className="portfolio-list-image"
                src="/github_thumbnail.jpg"
                alt="github page link"
              />
              GitHub
            </a>
          </main>
          <div className="footer w-full mt-12" ref={contactRef}>
            <div className="container mx-auto relative flex flex-col justify-center items-center p-4 space-y-4 md:space-y-0">
              <div className="footer-top flex flex-col space-y-4 justify-center items-center w-full">
                <nav className="footer-nav space-x-12 flex justify-between">
                  <span className="nav-link" onClick={() => scrollTo(aboutRef)}>
                    About
                  </span>
                  <span className="nav-link" onClick={() => scrollTo(workRef)}>
                    Work
                  </span>
                  <span
                    className="nav-link"
                    onClick={() => scrollTo(contactRef)}
                  >
                    Contact
                  </span>
                </nav>
                <div className="legal-text">Jon Russell © {currentYear}</div>
              </div>
              <ul className="contact-list-grid md:absolute md:right-0 flex justify-center mt-0">
                <li className="contact-list-item">
                  <a
                    className="contact-list-link"
                    href="mailto:joninvermont@gmail.com"
                  >
                    <img
                      className="contact-list-image"
                      src="https://image.flaticon.com/icons/svg/732/732200.svg"
                      alt="gmail"
                    />
                  </a>
                </li>
                <li className="contact-list-item">
                  <a
                    className="contact-list-link"
                    href="https://www.linkedin.com/in/jonathan-russell-76a0ab71/"
                  >
                    <img
                      className="contact-list-image"
                      src="https://image.flaticon.com/icons/svg/2111/2111499.svg"
                      alt="linked in"
                    />
                  </a>
                </li>
                <li className="contact-list-item">
                  <a
                    className="contact-list-link"
                    href="https://github.com/JonChamplain"
                  >
                    <img
                      className="contact-list-image"
                      src="https://image.flaticon.com/icons/svg/733/733553.svg"
                      alt="GitHub"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
