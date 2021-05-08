import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import "../stylesheets/styles.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      CloudsBackground: file(relativePath: { eq: "clouds-background.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: AVIF
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
          )
        }
      }
      SunBackground: file(relativePath: { eq: "sun.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: AVIF
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `);

  const CloudsBackground = getImage(data.CloudsBackground);
  const SunBackground = getImage(data.SunBackground);

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
        <Navbar />
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
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
