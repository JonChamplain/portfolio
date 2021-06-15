import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "../stylesheets/styles.scss";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      JonCharacter: file(relativePath: { eq: "jon-character-circle.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
      }
      CloudsBackground: file(relativePath: { eq: "clouds-background.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
      }
      SunBackground: file(relativePath: { eq: "sun.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `);

  let date = new Date();
  let currentYear = date.getFullYear();

  const CloudsBackground = getImage(data.CloudsBackground);
  const SunBackground = getImage(data.SunBackground);
  const JonCharacter = getImage(data.JonCharacter);

  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="App">
        <Helmet>
          <html lang="en" />
          <title>Jon Russell - A Web Developer</title>
          <meta
            name="description"
            content="I'm a web developer based in Burlington, Vermont"
          />
        </Helmet>
        <div className="parallax-container">
          <div className="background-close">
            <GatsbyImage
              className="background-clouds"
              image={CloudsBackground}
              alt=""
            />
          </div>
          <div className="background-far">
            <GatsbyImage
              className="background-sun"
              image={SunBackground}
              alt=""
            />
          </div>
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
                  <GatsbyImage
                    className="jon-character"
                    image={JonCharacter}
                    alt=""
                  />
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
              <Swiper
                spaceBetween={100}
                slidesPerView={1}
                pagination={{ dynamicBullets: true }}
                navigation={true}
                loop={true}
                centeredSlides={true}
              >
                <SwiperSlide>
                  <a
                    className="portfolio-list-link"
                    href="https://sleepy-anchorage-59081.herokuapp.com/"
                  >
                    <StaticImage
                      className="portfolio-list-image"
                      src="../images/mockblog_thumbnail.jpg"
                      alt="mock blog project link"
                    />
                    Mock Blog
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="portfolio-list-link"
                    href="https://secure-fjord-65417.herokuapp.com/"
                  >
                    <StaticImage
                      className="portfolio-list-image"
                      src="../images/yelpington_thumbnail.jpg"
                      alt="yelpington project link"
                    />
                    Yelpington
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="portfolio-list-link"
                    href="https://stark-plateau-02827.herokuapp.com/"
                  >
                    <StaticImage
                      className="portfolio-list-image"
                      src="../images/triptactoe_thumbnail.jpg"
                      alt="trip-tac-toe game link"
                    />
                    Trip-Tac-Toe
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="portfolio-list-link"
                    href="https://github.com/JonChamplain?tab=repositories"
                  >
                    <StaticImage
                      className="portfolio-list-image"
                      src="../images/github_thumbnail.jpg"
                      alt="github page link"
                    />
                    GitHub
                  </a>
                </SwiperSlide>
              </Swiper>
            </main>
            <div className="footer w-full mt-12" ref={contactRef}>
              <div className="container mx-auto relative flex flex-col justify-center items-center p-4 space-y-4 md:space-y-0">
                <div className="footer-top flex flex-col space-y-4 justify-center items-center w-full">
                  <nav className="footer-nav space-x-12 flex justify-between">
                    <span
                      className="nav-link"
                      onClick={() => scrollTo(aboutRef)}
                    >
                      About
                    </span>
                    <span
                      className="nav-link"
                      onClick={() => scrollTo(workRef)}
                    >
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
      </div>
    </>
  );
}
